import { TrendingUp } from 'lucide-react-native';
import React from 'react';
import { Image, View } from 'react-native';

import { Modal, Text } from '~/components/ui';
import { TokenType } from '~/config';

interface StakeUnstakeProps {
  showStakeUnstake: boolean;
  setShowStakeUnstake: (show: boolean) => void;
  token: TokenType;
  protocol: any;
}

const StakeUnstakeModal = ({
  showStakeUnstake,
  setShowStakeUnstake,
  token,
  protocol,
}: StakeUnstakeProps) => {
  return (
    <Modal isVisible={showStakeUnstake} hideModal={() => setShowStakeUnstake(false)} height={0.67}>
      {' '}
      <View className="mb-4 flex w-full flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-start gap-2">
          <TrendingUp size={20} color="black" strokeWidth={3} />
          <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            Stake Unstake
          </Text>
        </View>
        <View className="flex flex-row items-center justify-end gap-1  rounded-lg border-2 px-2 py-1">
          <Image source={require('~/public/tokens-icons/eth.png')} className="h-6 w-6" />
          <Text
            className="px-1 text-lg font-black text-gray-700"
            style={{ fontFamily: 'GaeilgeKids' }}>
            $500
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export { StakeUnstakeModal };
