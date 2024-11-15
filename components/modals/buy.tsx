import { Repeat, X } from 'lucide-react-native';
import { useState } from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';

import { AmountView, Button, Modal, Text } from '~/components/ui';
import { TokenType } from '~/config';

interface BuyProps {
  showBuy: boolean;
  setShowBuy: (show: boolean) => void;
  token: TokenType;
}

const BuyModal = ({ showBuy, setShowBuy }: BuyProps) => {
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
    <Modal
      isVisible={showBuy}
      onBackdropPress={() => {
        Keyboard.dismiss();
        setShowBuy(false);
      }}
      onBackButtonPress={() => {
        Keyboard.dismiss();
        setShowBuy(false);
      }}
      swipeDirection="down"
      onSwipeComplete={() => {
        Keyboard.dismiss();
        setShowBuy(false);
      }}
      hideModal={() => {
        Keyboard.dismiss();
        setShowBuy(false);
      }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={300}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={300}
      useNativeDriver
      height={0.83}
      style={{ margin: 0 }}>
      {/* Cryptos Amount Input */}
      <View className="flex w-full flex-col gap-2">
        <View className="flex flex-row items-center justify-start gap-2">
          <Repeat size={20} color="black" strokeWidth={3} />
          <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            Buy Ethereum
          </Text>
        </View>

        {/* Buying Crypto */}
        <AmountView value={amount} onChangeText={setAmount} />

        {/* Transaction Receipt */}
        <View className="mt-5 flex w-full rounded-lg border-2 border-dashed bg-white p-2">
          {/* Swapping */}
          <View className="flex flex-row items-center justify-between">
            <Text className="text-lg" style={{ fontFamily: '' }}>
              Spending
            </Text>
            <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
              500 USDC
            </Text>
          </View>
          {/* Receiving */}
          <View className="flex flex-row items-center justify-between">
            <Text className="text-lg" style={{ fontFamily: '' }}>
              Receiving
            </Text>
            <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
              0.01 ETH
            </Text>
          </View>
          {/* Dotted separator */}
          <View className="my-2 w-full border border-dashed " />
          {/* Gas Fee */}
          <View className="flex flex-row items-center justify-between">
            <Text className="text-lg" style={{ fontFamily: '' }}>
              Gas Fee
            </Text>
            <Text>~1 %</Text>
          </View>
        </View>
      </View>

      {/* Swap Button */}
      <View className="w-full gap-5 pb-2">
        {/* Number Pad */}
        <View className=" flex w-full flex-col gap-2">
          {/* Row 1: 1-2-3 */}
          <View className="flex flex-row gap-2">
            {[1, 2, 3].map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => handleNumberPress(num.toString())}
                className="flex h-16 flex-1 items-center justify-center rounded-lg">
                <Text className="text-5xl " style={{ fontFamily: 'GaeilgeKids' }}>
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 2: 4-5-6 */}
          <View className="flex flex-row gap-2">
            {[4, 5, 6].map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => handleNumberPress(num.toString())}
                className="flex h-16 flex-1 items-center justify-center rounded-lg">
                <Text className="text-5xl" style={{ fontFamily: 'GaeilgeKids' }}>
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 3: 7-8-9 */}
          <View className="flex flex-row gap-2">
            {[7, 8, 9].map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => handleNumberPress(num.toString())}
                className="flex h-16 flex-1 items-center justify-center rounded-lg">
                <Text className="text-5xl" style={{ fontFamily: 'GaeilgeKids' }}>
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 4: .-0-delete */}
          <View className="flex flex-row gap-2">
            <TouchableOpacity
              onPress={() => handleNumberPress('.')}
              className="flex h-16 flex-1 items-center justify-start rounded-lg ">
              <Text className="text-5xl" style={{ fontFamily: 'GaeilgeKids' }}>
                .
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNumberPress('0')}
              className="flex h-16 flex-1 items-center justify-center rounded-lg">
              <Text className="text-5xl" style={{ fontFamily: 'GaeilgeKids' }}>
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNumberPress('delete')}
              className="flex h-16 flex-1 items-center justify-center rounded-lg">
              <X size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={() => setShowBuy(false)}
          className="h-14 w-full rounded-xl bg-background py-1">
          <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
            Buy
          </Text>
        </Button>
      </View>
    </Modal>
  );
};

export default BuyModal;
