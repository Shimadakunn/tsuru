import { Send } from 'lucide-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AddressInput, AmountView, Modal, NumPad, Slider, Text } from '~/components/ui';
import { TokenType } from '~/config';

interface SendProps {
  showSend: boolean;
  setShowSend: (show: boolean) => void;
  token: TokenType;
}

const SendModal = ({ showSend, setShowSend, token }: SendProps) => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  const handleNumberPress = (value: string) => {
    if (value === 'delete') {
      setAmount((prev) => prev.slice(0, -1));
    } else if (value === '.' && amount.includes('.')) {
    } else if (amount.length >= 6 && value !== 'delete') {
    } else {
      setAmount((prev) => prev + value);
    }
  };

  return (
    <Modal isVisible={showSend} hideModal={() => setShowSend(false)} height={0.71}>
      {/* Cryptos Amount Input */}
      <View className="mb-4 flex w-full flex-row items-center justify-start gap-2">
        <Send size={20} color="black" strokeWidth={3} />
        <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
          Send
        </Text>
      </View>

      <AddressInput value={address} onChangeText={setAddress} />

      {/* Buying Crypto */}
      <AmountView value={amount} onChangeText={setAmount} />
      {/* Number Pad */}
      <NumPad handleNumberPress={handleNumberPress} className="mt-4" />

      {/* Action Button */}
      <Slider title="Send" onSlideEnd={() => {}} />
      {/* <Button
          onPress={() => setShowExchange(false)}
          className="h-14 w-full rounded-xl bg-background py-1">
          <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
            {orderType === 'buy' ? 'Buy' : 'Sell'}
          </Text>
        </Button> */}
    </Modal>
  );
};

export { SendModal };
