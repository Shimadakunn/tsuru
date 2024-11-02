import { router } from 'expo-router';
import { Scan } from 'lucide-react-native';
import { View, Image, Pressable } from 'react-native';

import { Button } from './ui/button';
import { Text } from './ui/text';
import GasBlack from '../public/header-icons/gas-black.png';
import Gas from '../public/header-icons/gas.png';
import Logo from '../public/logo.png';

export default function Header() {
  return (
    <View className="fl flex h-16 w-full flex-row items-center justify-between bg-background px-2">
      <View className="flex flex-row items-center justify-center gap-1">
        <Image source={Logo} className="h-8 w-8" />
        <Text className="text-3xl font-bold text-white" style={{ fontFamily: 'GaeilgeKids' }}>
          Shima
        </Text>
      </View>
      {/* <Button
        className="flex flex-row items-center justify-center gap-1 rounded-lg px-2 py-1"
        onPress={() => router.push('/finance')}>
        <Image source={Logo} className="h-5 w-5" />
        <Text className="text-lg font-bold">Shima</Text>
      </Button> */}
      <View className="flex flex-row items-center justify-center gap-4">
        <Button className="h-10 w-10" onPress={() => router.push('/finance')}>
          <Scan size={20} color="black" strokeWidth={3} />
        </Button>
        <Button
          className="flex flex-row items-center justify-center gap-1 rounded-lg px-2 py-1"
          onPress={() => router.push('/finance')}>
          <Image source={GasBlack} className="h-5 w-5" />
          <Text className="text-base font-bold text-black/80">$20.30</Text>
        </Button>
      </View>
      {/* <View className="flex flex-row items-center justify-center gap-2">
        <Image source={Logo} className="h-5 w-5" />
        <Text className="text-lg font-bold text-black">Shima</Text>
      </View> */}

      {/* <View className="flex flex-row items-center justify-center gap-4">
        <Scan size={20} color="white" strokeWidth={3} />
        <Pressable className="flex flex-row items-center justify-center gap-1 rounded-md border border-white bg-white/10 px-2 py-2">
          <Image source={Gas} className="h-5 w-5 text-white/80" />
          <Text className="text-base font-bold text-white/80">$20.30</Text>
        </Pressable>
      </View> */}
    </View>
  );
}
