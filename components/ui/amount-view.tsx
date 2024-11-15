import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface AmountViewProps {
  value: string;
  onChangeText: (text: string) => void;
  token?: string;
}

const AmountView = React.forwardRef<View, AmountViewProps>(
  ({ value, onChangeText, ...props }, ref) => {
    return (
      <View ref={ref} className="flex w-full items-start justify-start rounded-lg bg-white">
        <View className="w-full flex-row items-center justify-between px-1">
          {value ? (
            <Text className="text-5xl font-black" style={{ fontFamily: 'GaeilgeKids' }}>
              {value} $US
            </Text>
          ) : (
            <Text
              className="text-5xl font-black text-gray-400"
              style={{ fontFamily: 'GaeilgeKids' }}>
              100 $US
            </Text>
          )}
          <Image source={require('~/public/tokens-icons/eth.png')} className="mr-2 h-14 w-14" />
        </View>
        <Text
          className="px-1 text-lg font-black text-gray-700"
          style={{ fontFamily: 'GaeilgeKids' }}>
          0.001 ETH
        </Text>
        <View className="mt-2 w-full flex-row items-center justify-between">
          <TouchableOpacity
            className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
            onPress={() => onChangeText('20')}>
            <Text className="text-2xl font-black text-white" style={{ fontFamily: 'GaeilgeKids' }}>
              $20
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
            onPress={() => onChangeText('50')}>
            <Text className="text-2xl font-black text-white" style={{ fontFamily: 'GaeilgeKids' }}>
              $50
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
            onPress={() => onChangeText('100')}>
            <Text className="text-2xl font-black text-white" style={{ fontFamily: 'GaeilgeKids' }}>
              $100
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex h-12 w-20 items-center justify-center rounded-xl bg-background/90"
            onPress={() => onChangeText('500')}>
            <Text className="text-2xl font-black text-white" style={{ fontFamily: 'GaeilgeKids' }}>
              $500
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

AmountView.displayName = 'AmountView';

export { AmountView };
