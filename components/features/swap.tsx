import { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import { Button, Text, Modal, InputComplexe } from '~/components/ui';

interface SwapProps {
  showSwap: boolean;
  setShowSwap: (show: boolean) => void;
}

const Swap = ({ showSwap, setShowSwap }: SwapProps) => {
  const [amount, setAmount] = useState('');

  return (
    <Modal
      isVisible={showSwap}
      onBackdropPress={() => {
        Keyboard.dismiss();
        setShowSwap(false);
      }}
      onBackButtonPress={() => {
        Keyboard.dismiss();
        setShowSwap(false);
      }}
      swipeDirection="down"
      onSwipeComplete={() => {
        Keyboard.dismiss();
        setShowSwap(false);
      }}
      hideModal={() => {
        Keyboard.dismiss();
        setShowSwap(false);
      }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={300}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={300}
      useNativeDriver
      style={{ margin: 0 }}>
      {/* Cryptos Amount Input */}
      <View className="flex w-full flex-col gap-2">
        <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
          Swap Tokens
        </Text>
        {/* Swapping Crypto */}
        <View className="relative">
          <InputComplexe
            placeholder="10"
            value={amount}
            onChangeText={setAmount}
            isNumeric
            maxDecimals={8}
          />
          <View className="absolute right-4 top-4 pb-2">
            <Image source={require('~/public/tokens-icons/eth.png')} className="h-10 w-10" />
          </View>
          <View className="absolute bottom-3 right-4 ">
            <Text className=" text-sm text-gray-700" style={{ fontFamily: 'GaeilgeKids' }}>
              0.001 ETH
            </Text>
          </View>
          <View className="absolute bottom-3 left-3 flex-row items-start gap-1">
            <View className="rounded-lg border-2 px-2">
              <Text className="text-sm text-gray-700 " style={{ fontFamily: 'GaeilgeKids' }}>
                0.001
              </Text>
            </View>
            <View className="rounded-lg border-2 px-2">
              <Text className="text-sm text-gray-700 " style={{ fontFamily: 'GaeilgeKids' }}>
                0.05
              </Text>
            </View>
            <View className="rounded-lg border-2 px-2">
              <Text className="text-sm text-gray-700 " style={{ fontFamily: 'GaeilgeKids' }}>
                0.1
              </Text>
            </View>
          </View>
        </View>
        {/* Receiving Crypto */}
        <View className="relative">
          <InputComplexe
            placeholder="10"
            value={amount}
            onChangeText={setAmount}
            isNumeric
            maxDecimals={8}
          />
          <View className="absolute right-4 top-4 pb-2">
            <Image source={require('~/public/tokens-icons/eth.png')} className="h-10 w-10" />
          </View>
          <View className="absolute bottom-3 right-4 ">
            <Text className=" text-sm text-gray-700" style={{ fontFamily: 'GaeilgeKids' }}>
              0.001 ETH
            </Text>
          </View>
          <View className="absolute bottom-3 left-3 flex-row items-start gap-1">
            <View className="rounded-lg border-2 px-2">
              <Text className="text-sm text-gray-700 " style={{ fontFamily: 'GaeilgeKids' }}>
                0.001
              </Text>
            </View>
            <View className="rounded-lg border-2 px-2">
              <Text className="text-sm text-gray-700 " style={{ fontFamily: 'GaeilgeKids' }}>
                0.05
              </Text>
            </View>
            <View className="rounded-lg border-2 px-2">
              <Text className="text-sm text-gray-700 " style={{ fontFamily: 'GaeilgeKids' }}>
                0.1
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Transaction Receipt */}
      <View className="flex w-full rounded-lg border-2 border-dashed bg-white p-2">
        {/* Transaction Details */}
        <Text className="text-xl" style={{ fontFamily: 'Lexend_700Bold' }}>
          Transaction Details
        </Text>
        {/* Swapping */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg" style={{ fontFamily: '' }}>
            Swapping
          </Text>
          <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
            0.001 ETH
          </Text>
        </View>
        {/* Receiving */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg" style={{ fontFamily: '' }}>
            Receiving
          </Text>
          <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
            250 USDC
          </Text>
        </View>
        {/* Dotted separator */}
        <View className="my-2 w-full border border-dashed " />
        {/* Gas Fee */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg" style={{ fontFamily: '' }}>
            Gas Fee
          </Text>
          <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
            0.5 USDC
          </Text>
        </View>
        {/* Dotted separator */}
        <View className="my-2 w-full border border-dashed " />
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg" style={{ fontFamily: '' }}>
            Estimated Time
          </Text>
          <Text className="">~10 minutes</Text>
        </View>
      </View>

      {/* Swap Button */}
      <View className=" w-full py-2">
        <Button
          onPress={() => setShowSwap(false)}
          className="w-full rounded-full bg-background py-1">
          <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
            Execute Swap
          </Text>
        </Button>
      </View>
    </Modal>
  );
};

export default Swap;
