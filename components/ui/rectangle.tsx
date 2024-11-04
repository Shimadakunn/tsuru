import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  View,
  Pressable,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  LayoutChangeEvent,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
  runOnJS,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

// Get screen dimensions for calculations
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

// Spring animation configuration for smooth transitions
const SPRING_CONFIG = {
  damping: 30,
  mass: 0.8,
  stiffness: 160,
  overshootClamping: false,
  restDisplacementThreshold: 0.01,
  restSpeedThreshold: 0.01,
};

// Context type definition for sharing expansion state
interface ExpandableContextType {
  isExpanded: boolean;
  toggleExpand: () => void;
}

// Create context for sharing expansion state between components
const ExpandableContext = createContext<ExpandableContextType>({
  isExpanded: false,
  toggleExpand: () => {},
});

// Custom hook to access the expandable context
const useExpandable = () => useContext(ExpandableContext);

// Props interface for the main Expandable component
interface ExpandableProps {
  children: ReactNode;
  initialHeight?: number;
  initialWidth?: number;
}

/**
 * Expandable component that can transition between a collapsed and expanded state
 * Features:
 * - Smooth spring animations
 * - Gesture-based dismissal when expanded
 * - Flexible initial dimensions
 * - Context-based state management
 */
const Expandable = ({
  children,
  initialHeight = 83,
  initialWidth = SCREEN_WIDTH,
}: ExpandableProps) => {
  // State for tracking expansion
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  // Shared values for animations
  const progress = useSharedValue(0); // Controls animation progress (0 = collapsed, 1 = expanded)
  const translateY = useSharedValue(0); // Controls vertical position for drag dismissal

  // Add position tracking
  const [layout, setLayout] = useState({
    x: 0,
    y: 0,
    width: initialWidth,
    height: initialHeight,
  });

  // Handle layout changes to track position
  const onLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setLayout({ x, y, width, height });
  };

  // Handle drag gesture for dismissal
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: any) => {
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      if (isExpanded) {
        const newTranslation = context.startY + Math.max(0, event.translationY);
        translateY.value = newTranslation;
      }
    },
    onEnd: (event) => {
      // Dismiss if dragged far enough or with enough velocity
      if (event.velocityY > 500 || event.translationY > SCREEN_HEIGHT * 0.2) {
        translateY.value = withSpring(SCREEN_HEIGHT, SPRING_CONFIG);
        progress.value = withTiming(0);
        runOnJS(setIsExpanded)(false);
      } else {
        translateY.value = withSpring(0, SPRING_CONFIG);
      }
    },
  });

  // Updated animated styles for smoother transitions
  const rStyle = useAnimatedStyle(() => {
    const height = interpolate(progress.value, [0, 1], [initialHeight, SCREEN_HEIGHT]);
    const width = interpolate(progress.value, [0, 1], [initialWidth, SCREEN_WIDTH]);
    const top = interpolate(progress.value, [0, 1], [layout.y, 0]);
    const left = interpolate(progress.value, [0, 1], [layout.x, 0]);

    return {
      height,
      width,
      transform: [
        { translateY: translateY.value },
        {
          scale: interpolate(progress.value, [0, 0.5, 1], [1, 1.02, 1]),
        },
      ],
      ...(isExpanded
        ? {
            position: 'absolute',
            top,
            left,
            right: 0,
            bottom: 0,
            zIndex: 50,
            backgroundColor: 'white',
          }
        : { position: 'relative', zIndex: 0, backgroundColor: 'transparent' }),
    };
  });

  // Handle expansion state changes with updated timing
  React.useEffect(() => {
    if (isExpanded) {
      progress.value = withSpring(1, {
        ...SPRING_CONFIG,
        velocity: 1,
      });
      translateY.value = withSpring(0, SPRING_CONFIG);
    } else {
      progress.value = withSpring(0, {
        ...SPRING_CONFIG,
        velocity: 0,
      });
      translateY.value = withSpring(0, SPRING_CONFIG);
    }
  }, [isExpanded]);

  return (
    <ExpandableContext.Provider value={{ isExpanded, toggleExpand }}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={rStyle} className="pt-1" onLayout={onLayout}>
          <Pressable onPress={isExpanded ? undefined : toggleExpand} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1">
              {isExpanded && <View style={styles.dragIndicator} />}
              {children}
            </SafeAreaView>
          </Pressable>
        </Animated.View>
      </PanGestureHandler>
    </ExpandableContext.Provider>
  );
};

/**
 * Component to render content only when expanded
 */
const ExpandableContent = ({ children }: { children: ReactNode }) => {
  const { isExpanded } = useExpandable();
  if (!isExpanded) return null;
  return <View style={styles.content}>{children}</View>;
};

/**
 * Component to render content only when collapsed
 */
const ExpandableTrigger = ({ children }: { children: ReactNode }) => {
  const { toggleExpand, isExpanded } = useExpandable();
  if (isExpanded) return null;
  return children;
};

// Styles for the components
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  dragIndicator: {
    width: 50,
    height: 4,
    backgroundColor: 'black',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export { Expandable, ExpandableContent, ExpandableTrigger, useExpandable };
