import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { StakeUnstakeModal } from '~/components/modals';
import { Text } from '~/components/ui';
import { tokens } from '~/config';
import { tokenIcons } from '~/config/images';

const Protocol = ({ protocol, onSelect }: { protocol: any; onSelect: (protocol: any) => void }) => {
  return (
    <TouchableOpacity
      className="mx-auto mb-2 h-[75px] w-full flex-row items-center justify-between rounded-xl border-2 bg-white p-3"
      onPress={() => onSelect(protocol)}>
      <View className="flex-row items-center gap-2 pr-2">
        <Image source={tokenIcons.eth} className="h-11 w-11" />
        <View className="border border-white">
          <Text className="text-xl" style={{ fontFamily: 'Lexend_700Bold' }}>
            Kiln
          </Text>
          <Text className="text-gray-500" style={{ fontFamily: 'GaeilgeKids' }}>
            $0.00
          </Text>
        </View>
      </View>
      <View className="flex items-end">
        <Text className=" text-2xl font-black" style={{ fontFamily: 'GaeilgeKids' }}>
          14%
        </Text>
        <Text className="text-xs text-gray-500" style={{ fontFamily: 'Lexend_700Bold' }}>
          per year
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export function Defi() {
  const protocols = [
    { name: 'Kiln', apy: 12, token: tokens.ethereum },
    { name: 'Aave', apy: 10, token: tokens.usdc },
  ];
  const [showStakeUnstake, setShowStakeUnstake] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  const handleSelectProtocol = (protocol: any) => {
    setSelectedProtocol(protocol);
    setShowStakeUnstake(true);
  };
  return (
    <View className="mb-2 gap-2 px-6 py-4">
      <Text className="text-sm text-gray-500" style={{ fontFamily: 'Lexend_700Bold' }}>
        Decentralized Finance
      </Text>
      <Protocol protocol={protocols[0]} onSelect={handleSelectProtocol} />
      <Protocol protocol={protocols[1]} onSelect={handleSelectProtocol} />
      {selectedProtocol && (
        <StakeUnstakeModal
          showStakeUnstake={showStakeUnstake}
          setShowStakeUnstake={setShowStakeUnstake}
          token={tokens.ethereum}
          protocol={selectedProtocol}
        />
      )}
    </View>
  );
}
