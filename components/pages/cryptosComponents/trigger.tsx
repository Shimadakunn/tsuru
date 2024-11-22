import React from 'react';
import { Image, Text, View } from 'react-native';

import { TokenType } from '~/config';
import { tokenIcons } from '~/config/images';
import { formatBalance } from '~/utils/formatBalance';

export function Trigger({ token }: { token: TokenType }) {
  return (
    <View className="mx-auto mb-2 h-[75px] w-[95%] flex-row items-center justify-between rounded-xl border-2 bg-white p-3">
      <View className="flex-row items-center gap-2 pr-2">
        <Image source={tokenIcons.eth} className="h-11 w-11" />
        <View className="border border-white">
          <Text className="text-xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            Ethereum
          </Text>
          <Text className="text-gray-500" style={{ fontFamily: 'GaeilgeKids' }}>
            0.001 ETH
          </Text>
        </View>
      </View>
      <View className="flex items-end justify-center ">
        <Text className=" text-2xl font-black" style={{ fontFamily: 'GaeilgeKids' }}>
          250.32 $US
        </Text>
        <Text className="text-gray-500" style={{ fontFamily: 'GaeilgeKids' }}>
          + {formatBalance(28, 2)} %
        </Text>
      </View>
    </View>
  );
}
