import { TrendingUp } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { AmountView, Modal, NumPad, Slider, Text } from '~/components/ui';
import { TokenType } from '~/config';

interface ExchangeProps {
  showExchange: boolean;
  setShowExchange: (show: boolean) => void;
  token: TokenType;
  orderType: 'buy' | 'sell';
}

const SwapModal = ({ showExchange, setShowExchange, token, orderType }: ExchangeProps) => {
  const [amount, setAmount] = useState('');

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
    <Modal isVisible={showExchange} hideModal={() => setShowExchange(false)} height={0.67}>
      {/* Cryptos Amount Input */}
      <View className="mb-4 flex w-full flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-start gap-2">
          <TrendingUp size={20} color="black" strokeWidth={3} />
          <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            {orderType === 'buy' ? 'Buy Ethereum' : 'Sell Ethereum'}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-end gap-1  rounded-lg border-2 px-2 py-1">
          <Image source={require('~/public/tokens-icons/eth.png')} className="h-6 w-6" />
          <Text
            className="px-1 text-lg font-black text-gray-700"
            style={{ fontFamily: 'GaeilgeKids' }}>
            $500
          </Text>
        </View>
      </View>

      {/* Buying Crypto */}
      <AmountView value={amount} onChangeText={setAmount} />

      {/* Number Pad */}
      <NumPad handleNumberPress={handleNumberPress} className="mt-4" />

      {/* Action Button */}
      <Slider title={orderType === 'buy' ? 'Buy' : 'Sell'} onSlideEnd={() => {}} />
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

export { SwapModal };
