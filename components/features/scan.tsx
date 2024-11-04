import { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import { Button, Text, Modal, Input } from '~/components/ui';

interface ScanProps {
  showScan: boolean;
  setShowScan: (show: boolean) => void;
}

const Scan = ({ showScan, setShowScan }: ScanProps) => {
  const [amount, setAmount] = useState('');

  return (
    <Modal
      isVisible={showScan}
      onBackdropPress={() => {
        Keyboard.dismiss();
        setShowScan(false);
      }}
      onBackButtonPress={() => {
        Keyboard.dismiss();
        setShowScan(false);
      }}
      swipeDirection="down"
      onSwipeComplete={() => {
        Keyboard.dismiss();
        setShowScan(false);
      }}
      hideModal={() => {
        Keyboard.dismiss();
        setShowScan(false);
      }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={300}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={300}
      useNativeDriver
      style={{ margin: 0 }}
    />
  );
};

export default Scan;
