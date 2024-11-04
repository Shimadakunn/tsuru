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

interface AddGasProps {
  showGas: boolean;
  setShowGas: (show: boolean) => void;
}

const AddGas = ({ showGas, setShowGas }: AddGasProps) => {
  const [amount, setAmount] = useState('');

  return (
    <Modal
      isVisible={showGas}
      onBackdropPress={() => {
        Keyboard.dismiss();
        setShowGas(false);
      }}
      onBackButtonPress={() => {
        Keyboard.dismiss();
        setShowGas(false);
      }}
      swipeDirection="down"
      onSwipeComplete={() => {
        Keyboard.dismiss();
        setShowGas(false);
      }}
      hideModal={() => {
        Keyboard.dismiss();
        setShowGas(false);
      }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={300}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={300}
      useNativeDriver
      style={{ margin: 0 }}>
      <View className="h-full w-full flex-col items-center justify-between gap-2">
        <View className="flex w-full flex-col gap-2">
          {/* Add Gas Title */}
          <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            Refill Gas Tank
          </Text>
          {/* Description */}
          <Text className="text-sm">
            Top up your wallet with gas to be able to send transactions.
          </Text>
          {/* Gas AmountInput */}
          <View className="relative">
            <Input placeholder="Max: 10" value={amount} onChangeText={setAmount} isNumeric />
            <View className="absolute right-4 top-1/2 -translate-y-1/2 flex-row items-center gap-1">
              <Image source={require('~/public/tokens-icons/eth.png')} className="h-8 w-8" />
              <Text className="text-xl" style={{ fontFamily: 'Lexend_700Bold' }}>
                USDC
              </Text>
            </View>
          </View>
          {/* Gas Amount */}
          <View className="w-full flex-row items-center justify-around gap-2">
            <Button className="w-20 rounded-lg border-2 bg-white py-1" onPress={() => {}}>
              <Text className="mx-auto text-gray-900" style={{ fontFamily: 'Lexend_700Bold' }}>
                $1
              </Text>
            </Button>
            <Button className="w-20 rounded-lg border-2 bg-white py-1" onPress={() => {}}>
              <Text className="mx-auto text-gray-900" style={{ fontFamily: 'Lexend_700Bold' }}>
                $3
              </Text>
            </Button>
            <Button className="w-20 rounded-lg border-2 bg-white py-1" onPress={() => {}}>
              <Text className="mx-auto text-gray-900" style={{ fontFamily: 'Lexend_700Bold' }}>
                $5
              </Text>
            </Button>
            <Button className="w-20 rounded-lg border-2 bg-white py-1" onPress={() => {}}>
              <Text className="mx-auto text-gray-900" style={{ fontFamily: 'Lexend_700Bold' }}>
                $10
              </Text>
            </Button>
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
              Spending
            </Text>
            <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
              10 USDC
            </Text>
          </View>
          {/* Receiving */}
          <View className="flex flex-row items-center justify-between">
            <Text className="text-lg" style={{ fontFamily: '' }}>
              Receiving
            </Text>
            <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
              $10 Gas
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
        <View className=" w-full py-1">
          <Button
            onPress={() => setShowGas(false)}
            className="w-full rounded-full bg-background py-1">
            <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
              Buy Gas
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default AddGas;
