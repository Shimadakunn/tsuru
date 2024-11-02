import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Animated,
  ViewStyle,
  StyleProp,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface ExpandableContextType {
  isExpanded: boolean;
  toggleExpand: () => void;
  expandDirection: 'vertical' | 'horizontal' | 'both';
  expandBehavior: 'replace' | 'push';
  transitionDuration: number;
  initialDelay: number;
  onExpandEnd?: () => void;
  onCollapseEnd?: () => void;
}

const ExpandableContext = createContext<ExpandableContextType>({
  isExpanded: false,
  toggleExpand: () => {},
  expandDirection: 'vertical',
  expandBehavior: 'replace',
  transitionDuration: 300,
  initialDelay: 0,
});

const useExpandable = () => useContext(ExpandableContext);

interface ExpandableProps {
  children: ReactNode | ((props: { isExpanded: boolean }) => ReactNode);
  expanded?: boolean;
  onToggle?: () => void;
  transitionDuration?: number;
  expandDirection?: 'vertical' | 'horizontal' | 'both';
  expandBehavior?: 'replace' | 'push';
  initialDelay?: number;
  onExpandStart?: () => void;
  onExpandEnd?: () => void;
  onCollapseStart?: () => void;
  onCollapseEnd?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Expandable: React.FC<ExpandableProps> = ({
  children,
  expanded,
  onToggle,
  transitionDuration = 300,
  expandDirection = 'vertical',
  expandBehavior = 'replace',
  initialDelay = 0,
  onExpandStart,
  onExpandEnd,
  onCollapseStart,
  onCollapseEnd,
  style,
}) => {
  const [isExpandedInternal, setIsExpandedInternal] = useState(false);
  const isExpanded = expanded !== undefined ? expanded : isExpandedInternal;
  const toggleExpand = onToggle || (() => setIsExpandedInternal((prev) => !prev));

  useEffect(() => {
    if (isExpanded) {
      onExpandStart?.();
    } else {
      onCollapseStart?.();
    }
  }, [isExpanded, onExpandStart, onCollapseStart]);

  const contextValue: ExpandableContextType = {
    isExpanded,
    toggleExpand,
    expandDirection,
    expandBehavior,
    transitionDuration,
    initialDelay,
    onExpandEnd,
    onCollapseEnd,
  };

  return (
    <ExpandableContext.Provider value={contextValue}>
      <Animated.View style={[styles.container, style]}>
        {typeof children === 'function' ? children({ isExpanded }) : children}
      </Animated.View>
    </ExpandableContext.Provider>
  );
};

interface ExpandableContentProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  keepMounted?: boolean;
}

const ExpandableContent: React.FC<ExpandableContentProps> = ({
  children,
  style,
  keepMounted = false,
}) => {
  const { isExpanded, transitionDuration } = useExpandable();
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        transitionDuration,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity
      )
    );
  }, [isExpanded, transitionDuration]);

  if (!isExpanded && !keepMounted) return null;

  return <Animated.View style={[styles.expandableContent, style]}>{children}</Animated.View>;
};

interface ExpandableCardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  collapsedSize?: { width?: number; height?: number };
  expandedSize?: { width?: number; height?: number };
  hoverToExpand?: boolean;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  children,
  style,
  collapsedSize = { width: 320, height: 211 },
  expandedSize = { width: 480, height: undefined },
}) => {
  const { isExpanded } = useExpandable();
  const [cardSize] = useState({
    width: new Animated.Value(collapsedSize.width || 320),
    height: new Animated.Value(collapsedSize.height || 211),
  });

  useEffect(() => {
    Animated.parallel([
      Animated.spring(cardSize.width, {
        toValue: isExpanded ? expandedSize.width || collapsedSize.width! : collapsedSize.width!,
        useNativeDriver: false,
      }),
      Animated.spring(cardSize.height, {
        toValue: isExpanded ? expandedSize.height || collapsedSize.height! : collapsedSize.height!,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isExpanded]);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          width: cardSize.width,
          height: cardSize.height,
        },
        style,
      ]}>
      {children}
    </Animated.View>
  );
};

const ExpandableTrigger: React.FC<{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => {
  const { toggleExpand } = useExpandable();

  return (
    <Pressable onPress={toggleExpand} style={[styles.trigger, style]}>
      {children}
    </Pressable>
  );
};

const ExpandableCardHeader: React.FC<{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => <View style={[styles.cardHeader, style]}>{children}</View>;

const ExpandableCardContent: React.FC<{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => <View style={[styles.cardContent, style]}>{children}</View>;

const ExpandableCardFooter: React.FC<{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => <View style={[styles.cardFooter, style]}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  expandableContent: {
    overflow: 'hidden',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  trigger: {
    cursor: 'pointer',
  },
  cardHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardContent: {
    padding: 16,
    paddingTop: 0,
    flexGrow: 1,
  },
  cardFooter: {
    padding: 16,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {
  Expandable,
  useExpandable,
  ExpandableCard,
  ExpandableContent,
  ExpandableContext,
  ExpandableTrigger,
  ExpandableCardHeader,
  ExpandableCardContent,
  ExpandableCardFooter,
};
