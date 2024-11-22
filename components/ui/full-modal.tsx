import React, { useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Dimensions } from 'react-native';
import ModalComponent, { ModalProps } from 'react-native-modal';

interface Props {
  hideModal: () => void;
  hideCloseButton?: boolean;
  style?: StyleProp<ViewStyle>;
  height?: number;
  fullScreen?: boolean;
}

const FullModal = ({
  hideModal,
  hideCloseButton,
  style,
  children,
  height,
  fullScreen,
  ...props
}: Props & Partial<ModalProps>) => {
  const [offsetY, setOffsetY] = useState(0);

  return (
    <ModalComponent
      {...props}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={300}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={300}
      useNativeDriver
      swipeDirection="down"
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      onSwipeComplete={hideModal}
      style={[styles.modalContainer, fullScreen && styles.fullScreen]}>
      <View
        style={[
          styles.modal,
          style,
          {
            transform: [{ translateY: Math.max(0, offsetY) }],
            flex: fullScreen ? 1 : height || 0.85,
          },
          fullScreen && styles.fullScreenModal,
        ]}>
        {children}
      </View>
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 120,
    height: 40,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: 'gray',
    borderRadius: 2,
    marginVertical: 8,
    alignSelf: 'center',
  },
  modal: {
    borderWidth: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  text: {
    fontSize: 20,
  },
  fullScreen: {
    margin: 0,
    marginBottom: 0,
  },
  fullScreenModal: {
    borderRadius: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 0,
    width: '100%',
    height: '100%',
  },
});

export default FullModal;
