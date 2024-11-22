import { CreditCard, Scan } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';

export default function Actions() {
  return (
    <View className="my-4 w-full flex-row items-center justify-center gap-3">
      <TouchableOpacity className="flex h-16 w-20 items-center justify-center rounded-2xl bg-white">
        <CreditCard size={35} color="black" strokeWidth={2.5} />
      </TouchableOpacity>
      <TouchableOpacity className="flex h-16 w-20 items-center justify-center rounded-2xl bg-white">
        <CreditCard size={35} color="black" strokeWidth={2.5} />
      </TouchableOpacity>
      <TouchableOpacity className="flex h-16 w-20 items-center justify-center rounded-2xl bg-white">
        <CreditCard size={35} color="black" strokeWidth={2.5} />
      </TouchableOpacity>
      <TouchableOpacity className="flex h-16 w-20 items-center justify-center rounded-2xl bg-white">
        <Scan size={30} color="black" strokeWidth={2.5} />
      </TouchableOpacity>
    </View>
  );
}
