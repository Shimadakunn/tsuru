import { Send } from 'lucide-react-native';
import { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import { Button, Text, Modal, InputComplexe, Input } from '~/components/ui';

interface SendProps {
  showSend: boolean;
  setShowSend: (show: boolean) => void;
}

const SendModal = ({ showSend, setShowSend }: SendProps) => {
  const [amount, setAmount] = useState('');

  return (
    <Modal
      isVisible={showSend}
      onBackdropPress={() => {
        Keyboard.dismiss();
        setShowSend(false);
      }}
      onBackButtonPress={() => {
        Keyboard.dismiss();
        setShowSend(false);
      }}
      swipeDirection="down"
      onSwipeComplete={() => {
        Keyboard.dismiss();
        setShowSend(false);
      }}
      hideModal={() => {
        Keyboard.dismiss();
        setShowSend(false);
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
        <View className="flex flex-row items-center justify-start gap-2">
          <Send size={20} color="black" strokeWidth={3} />
          <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            Send Tokens
          </Text>
        </View>
        {/* Sending Crypto */}
        <Input placeholder="0x..." value={amount} onChangeText={setAmount} isNumeric />

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

        {/* Receiving */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg" style={{ fontFamily: '' }}>
            To
          </Text>
          <Text className="text-lg">0xEfe...</Text>
        </View>
        {/* Swapping */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg" style={{ fontFamily: '' }}>
            Amount
          </Text>
          <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
            0.001 ETH
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
          <Text>~10 minutes</Text>
        </View>
      </View>

      {/* Send Button */}
      <View className=" w-full py-2">
        <Button
          onPress={() => setShowSend(false)}
          className="w-full rounded-full bg-background py-1">
          <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
            Execute Send
          </Text>
        </Button>
      </View>
    </Modal>
  );
};

export default SendModal;
