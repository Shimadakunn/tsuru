import { Text } from 'components/ui/text';
import { View } from 'react-native';
import { formatBalance } from 'utils/formatBalance';

export default function Balance() {
  return (
    <View className="flex w-full items-start justify-center border py-8 pl-6">
      <View className="flex flex-row items-end justify-center">
        <Text className="text-6xl text-white" style={{ fontFamily: 'GaeilgeKids' }}>
          {formatBalance(20.31038, 2)} $US
        </Text>
      </View>
      <View className="flex flex-row items-center justify-start gap-2">
        <Text className="text-xl text-red-400">-${formatBalance(20.31038, 2)}</Text>
        <Text className="text-xl text-green-400">+{formatBalance(28, 2)}%</Text>
      </View>
    </View>
  );
}
