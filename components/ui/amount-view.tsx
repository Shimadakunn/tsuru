import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface AmountViewProps {
  value: string;
  onChangeText: (text: string) => void;
  token?: string;
}

const AmountView = React.forwardRef<View, AmountViewProps>(({ value, onChangeText }, ref) => {
  return (
    <View ref={ref} className="flex w-full items-start justify-between rounded-lg">
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

      <View className="mt-2 w-full flex-row items-center justify-center gap-4 px-1">
        <TouchableOpacity
          className="flex h-10 w-16 items-center justify-center rounded-xl bg-gray-400"
          onPress={() => onChangeText('20')}>
          <Text
            className="ml-1 text-xl font-black text-white"
            style={{ fontFamily: 'GaeilgeKids' }}>
            10%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex h-10 w-16 items-center justify-center rounded-xl bg-gray-400"
          onPress={() => onChangeText('50')}>
          <Text
            className="ml-1 text-xl font-black text-white"
            style={{ fontFamily: 'GaeilgeKids' }}>
            25%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex h-10 w-16 items-center justify-center rounded-xl bg-gray-400"
          onPress={() => onChangeText('100')}>
          <Text
            className="ml-1 text-xl font-black text-white"
            style={{ fontFamily: 'GaeilgeKids' }}>
            50%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex h-10 w-16 items-center justify-center rounded-xl bg-gray-400"
          onPress={() => onChangeText('500')}>
          <Text
            className="ml-1 text-xl font-black text-white"
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
