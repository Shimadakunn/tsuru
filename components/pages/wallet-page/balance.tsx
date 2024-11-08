import { Text } from 'components/ui/text';
import { View } from 'react-native';
import { formatBalance } from 'utils/formatBalance';

export default function Balance() {
  return (
    <View className="flex h-36 w-full items-center justify-center border border-gray-200 bg-background">
      <View className="flex flex-row items-center justify-start">
        <Text className="pt-1 text-3xl text-white">$</Text>
        <Text className="text-7xl text-white" style={{ fontFamily: 'GaeilgeKids' }}>
          {formatBalance(20.31038, 2)}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-start gap-2">
        <Text className="text-xl text-red-400">-${formatBalance(20.31038, 2)}</Text>
        <Text className="text-xl text-green-400">+{formatBalance(28, 2)}%</Text>
      </View>
    </View>
  );
}
