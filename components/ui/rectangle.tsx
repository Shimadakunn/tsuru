import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View, Pressable, Dimensions, StyleSheet } from 'react-native';
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

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const SPRING_CONFIG = {
  damping: 20,
  mass: 1,
  stiffness: 200,
};

interface ExpandableContextType {
  isExpanded: boolean;
  toggleExpand: () => void;
}

const ExpandableContext = createContext<ExpandableContextType>({
  isExpanded: false,
  toggleExpand: () => {},
});

const useExpandable = () => useContext(ExpandableContext);

interface ExpandableProps {
  children: ReactNode;
  initialHeight?: number;
  initialWidth?: number;
}

const Expandable = ({
  children,
  initialHeight = 200,
  initialWidth = SCREEN_WIDTH - 32,
}: ExpandableProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  // Animation values
  const progress = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Gesture handler for drag to dismiss
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: any) => {
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      if (isExpanded) {
        translateY.value = context.startY + event.translationY;
      }
    },
    onEnd: (event) => {
      if (event.velocityY > 500 || event.translationY > SCREEN_HEIGHT * 0.2) {
        translateY.value = withSpring(SCREEN_HEIGHT, SPRING_CONFIG);
        progress.value = withTiming(0);
        runOnJS(setIsExpanded)(false);
      } else {
        translateY.value = withSpring(0, SPRING_CONFIG);
      }
    },
  });

  // Animated styles for the container
  const rStyle = useAnimatedStyle(() => {
    const height = interpolate(progress.value, [0, 1], [initialHeight, SCREEN_HEIGHT]);

    const width = interpolate(progress.value, [0, 1], [initialWidth, SCREEN_WIDTH]);

    const borderRadius = interpolate(progress.value, [0, 1], [20, 0]);

    const marginHorizontal = interpolate(progress.value, [0, 1], [16, 0]);

    return {
      height,
      width,
      borderRadius,
      marginHorizontal,
      transform: [{ translateY: translateY.value }],
    };
  });

  // Effect to handle expansion state
  React.useEffect(() => {
    if (isExpanded) {
      progress.value = withSpring(1, SPRING_CONFIG);
      translateY.value = withSpring(0, SPRING_CONFIG);
    } else {
      progress.value = withSpring(0, SPRING_CONFIG);
      translateY.value = withSpring(0, SPRING_CONFIG);
    }
  }, [isExpanded]);

  return (
    <ExpandableContext.Provider value={{ isExpanded, toggleExpand }}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.container, rStyle]}>
          {isExpanded && <View style={styles.dragIndicator} />}
          {children}
        </Animated.View>
      </PanGestureHandler>
    </ExpandableContext.Provider>
  );
};

interface ExpandableContentProps {
  children: ReactNode;
}

const ExpandableContent = ({ children }: ExpandableContentProps) => {
  const { isExpanded } = useExpandable();

  if (!isExpanded) return null;

  return <View style={styles.content}>{children}</View>;
};

interface ExpandableTriggerProps {
  children: ReactNode;
}

const ExpandableTrigger = ({ children }: ExpandableTriggerProps) => {
  const { toggleExpand, isExpanded } = useExpandable();

  if (isExpanded) return null;

  return <Pressable onPress={toggleExpand}>{children}</Pressable>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dragIndicator: {
    width: 40,
    height: 4,
    backgroundColor: '#DEDEDE',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export { Expandable, ExpandableContent, ExpandableTrigger, useExpandable };
