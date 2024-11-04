import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { toast } from 'sonner-native';

import Swap from '~/components/features/swap';
import { Button } from '~/components/ui';
import { Expandable, ExpandableContent, ExpandableTrigger } from '~/components/ui/rectangle';
import { Text } from '~/components/ui/text';
import { formatBalance } from '~/utils/formatBalance';

const Cryptos = () => {
  const [showSend, setShowSend] = useState(false);
  return (
    <>
      <Expandable>
        <ExpandableTrigger>
          <View className="mx-auto h-[75px] w-[90%] flex-row items-center justify-between rounded-lg border-2 bg-white p-4">
            <View className="flex-row items-center gap-2">
              <Image source={require('~/public/tokens-icons/eth.png')} className="h-11 w-11" />
              <View className="">
                <Text className=" text-xl " style={{ fontFamily: 'Lexend_700Bold' }}>
                  ETH
                </Text>
                <Text className="text-gray-500" style={{ fontFamily: 'GaeilgeKids' }}>
                  0.001
                </Text>
              </View>
            </View>
            <Text className="text-2xl font-black" style={{ fontFamily: 'GaeilgeKids' }}>
              $250.32
            </Text>
          </View>
        </ExpandableTrigger>
        <ExpandableContent>
          <View className="relative flex-1">
            {/* Crypto Image, Name, Price, Change, Balance */}
            <View className="h-[16vh] w-full flex-row items-center justify-between border p-4">
              <View className="flex-col items-start justify-between gap-2">
                <Image source={require('~/public/tokens-icons/eth.png')} className="h-16 w-16" />
                <View className="flex-1">
                  <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
                    Ethereum
                  </Text>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-xl text-gray-800" style={{ fontFamily: 'GaeilgeKids' }}>
                      $2,533.23
                    </Text>
                    <Text className="text-lg text-green-500" style={{ fontFamily: 'GaeilgeKids' }}>
                      +{formatBalance(28, 2)}%
                    </Text>
                  </View>
                </View>
              </View>
              <View className="h-full flex-col items-end justify-between gap-2">
                <Text className="text-xl text-gray-800" style={{ fontFamily: 'GaeilgeKids' }}>
                  {' '}
                </Text>
                <View className="flex-col items-end ">
                  <Text className="text-lg text-gray-800" style={{ fontFamily: 'GaeilgeKids' }}>
                    0.001 ETH
                  </Text>
                  <Text className="text-4xl" style={{ fontFamily: 'GaeilgeKids' }}>
                    $250.32
                  </Text>
                </View>
              </View>
            </View>
            {/* Swap and Send Buttons*/}
            <View className="absolute bottom-0 w-full flex-row items-end justify-around border p-4">
              <Button
                onPress={() => setShowSend(true)}
                className="rounded-full bg-background px-12 py-2">
                <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
                  Swap
                </Text>
                <Swap showSwap={showSend} setShowSwap={setShowSend} />
              </Button>
              <Button
                onPress={() => toast.success('Send')}
                className="rounded-full bg-background px-12 py-2">
                <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
                  Send
                </Text>
              </Button>
            </View>
          </View>
        </ExpandableContent>
      </Expandable>
    </>
  );
};

export default Cryptos;
