import React from 'react';
import { Image, Text, View } from 'react-native';

import { TokenType } from '~/config';
import { formatBalance } from '~/utils/formatBalance';

export function Header({ token }: { token: TokenType }) {
  return (
    <View className="h-[16vh] w-full flex-row items-center justify-between px-6 py-4">
      <View className="flex-col items-start justify-between gap-2">
        <Image source={require('~/public/tokens-icons/eth.png')} className="mt-3 h-16 w-16" />
        <View className="flex-1 items-end justify-end">
          <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            Ethereum
          </Text>
        </View>
      </View>
      <View className="h-full flex-col items-end justify-between gap-2">
        <Text className="text-xl text-gray-800" style={{ fontFamily: 'GaeilgeKids' }}>
          {' '}
        </Text>
        <View className="flex-col items-end ">
          <Text className="text-lg text-gray-800" style={{ fontFamily: 'GaeilgeKids' }}>
            + {formatBalance(28, 2)} %
          </Text>
          <Text className="text-4xl" style={{ fontFamily: 'GaeilgeKids' }}>
            2,533.23 $US
          </Text>
        </View>
      </View>
    </View>
  );
}
