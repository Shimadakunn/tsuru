import { Repeat, Send } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import BuyModal from '~/components/modals/buy';
import Swap from '~/components/modals/swap';
import { Button } from '~/components/ui';
import { Expandable, ExpandableContent, ExpandableTrigger } from '~/components/ui/rectangle';
import { Text } from '~/components/ui/text';
import { TokenType, tokens } from '~/config';
import { tokenIcons } from '~/config/images';
import { formatBalance } from '~/utils/formatBalance';

const Cryptos = () => {
  const [showSwap, setShowSwap] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const token: TokenType = tokens.ethereum;
  useEffect(() => {
    console.log(token.coin.toLowerCase());
  }, [token]);
  return (
    <>
      <Expandable>
        <ExpandableTrigger>
          <View className="mx-auto mt-3 h-[75px] w-[95%] flex-row items-center justify-between rounded-xl border-2 bg-white p-3">
            <View className="flex-row items-center gap-2">
              <Image
                source={tokenIcons[token.coin.toLowerCase() as keyof typeof tokenIcons]}
                className="h-11 w-11"
              />
              <View className="">
                <Text className=" text-xl " style={{ fontFamily: 'Lexend_700Bold' }}>
                  Ethereum
                </Text>
                <Text className="text-gray-500" style={{ fontFamily: 'GaeilgeKids' }}>
                  0.001 ETH
                </Text>
              </View>
            </View>
            <View className="flex items-end justify-center">
              <Text className="text-2xl font-black" style={{ fontFamily: 'GaeilgeKids' }}>
                250.32 $US
              </Text>
              <Text className="text-gray-500" style={{ fontFamily: 'GaeilgeKids' }}>
                + {formatBalance(28, 2)} %
              </Text>
            </View>
          </View>
        </ExpandableTrigger>
        <ExpandableContent>
          <View className="relative flex-1">
            {/* Crypto Image, Name, Price, Change, Balance */}
            <View className="h-[16vh] w-full flex-row items-center justify-between p-4">
              <View className="flex-col items-start justify-between gap-2">
                <Image
                  source={require('~/public/tokens-icons/eth.png')}
                  className="mt-3 h-16 w-16"
                />
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
            {/* Swap and Send Buttons*/}
            <View className="absolute bottom-0 w-full flex-row items-center justify-center gap-5 border py-4">
              <Button
                onPress={() => setShowSwap(true)}
                className="h-14 w-[43vw] rounded-xl bg-background">
                <View className="flex flex-row items-center justify-start gap-2">
                  <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
                    Sell
                  </Text>
                  <Repeat size={20} color="white" strokeWidth={3} />
                </View>
                <Swap showSwap={showSwap} setShowSwap={setShowSwap} />
              </Button>
              <Button
                onPress={() => setShowBuy(true)}
                className="h-14 w-[43vw] rounded-xl bg-background">
                <View className="flex flex-row items-center justify-start gap-2">
                  <Text className="text-2xl text-white" style={{ fontFamily: 'Lexend_700Bold' }}>
                    Buy
                  </Text>
                  <Send size={20} color="white" strokeWidth={3} />
                </View>
                <BuyModal showBuy={showBuy} setShowBuy={setShowBuy} token={token} />
              </Button>
            </View>
          </View>
        </ExpandableContent>
      </Expandable>
    </>
  );
};

export default Cryptos;
