import { Text } from 'components/ui/text';
import { TouchableOpacity, View } from 'react-native';

export default function Actions() {
  return (
    <View className="flex h-12 w-full items-center justify-center border border-gray-200 bg-background">
      <View className="flex w-full flex-row items-center justify-around">
        <TouchableOpacity className="flex aspect-square h-12 items-center justify-center rounded-lg bg-white">
          <Text>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Swap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
