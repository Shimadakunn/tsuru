import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface AmountViewProps {
  value: string;
  onChangeText: (text: string) => void;
  token?: string;
}

const AmountView = React.forwardRef<View, AmountViewProps>(({ value, onChangeText }, ref) => {
  return (
    <View ref={ref} className="w-full flex-1 items-start justify-between rounded-lg">
      <View className="w-full flex-row items-start justify-between px-1">
        {value ? (
          <View className="mt-2 flex-col items-start justify-between">
            <Text className="text-5xl font-black" style={{ fontFamily: 'GaeilgeKids' }}>
              {value} $US
            </Text>
            <Text
              className="px-1 text-lg font-black text-gray-500"
              style={{ fontFamily: 'GaeilgeKids' }}>
              0.1 ETH
            </Text>
          </View>
        ) : (
          <View className="mt-2 flex-col items-start justify-between ">
            <Text
              className="text-5xl font-black text-gray-400"
              style={{ fontFamily: 'GaeilgeKids' }}>
              0 $US
            </Text>
            <Text
              className=" px-1 text-end text-lg font-black text-gray-500"
              style={{ fontFamily: 'GaeilgeKids' }}>
              0
            </Text>
          </View>
        )}
        <View className="flex-col items-end justify-between gap-1">
          <Image source={require('~/public/tokens-icons/eth.png')} className="mr-2 h-14 w-14" />
          <Text
            className="px-1 text-lg font-black text-gray-700"
            style={{ fontFamily: 'GaeilgeKids' }}>
            0.001 ETH
          </Text>
        </View>
      </View>

      {/* Transaction Receipt */}
      <View className="flex w-full rounded-lg border-2 border-dashed p-2">
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

      <View className="mt-2 w-full flex-row items-center justify-between">
        <TouchableOpacity
          className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
          onPress={() => onChangeText('20')}>
          <Text
            className="ml-1 text-2xl font-black text-white"
            style={{ fontFamily: 'GaeilgeKids' }}>
            10%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
          onPress={() => onChangeText('50')}>
          <Text
            className="ml-1 text-2xl font-black text-white"
            style={{ fontFamily: 'GaeilgeKids' }}>
            25%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
          onPress={() => onChangeText('100')}>
          <Text
            className="ml-1 text-2xl font-black text-white"
            style={{ fontFamily: 'GaeilgeKids' }}>
            50%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
          onPress={() => onChangeText('500')}>
          <Text
            className="ml-1 text-2xl font-black text-white"
            style={{ fontFamily: 'GaeilgeKids' }}>
            100%
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

AmountView.displayName = 'AmountView';

export { AmountView };
