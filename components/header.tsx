import { Scan } from 'lucide-react-native';
import { useState } from 'react';
import { View, Image, Pressable } from 'react-native';

import { Button } from './ui/button';
import { Text } from './ui/text';
import GasBlack from '../public/header-icons/gas-black.png';
import Logo from '../public/logo.png';

import AddGas from '~/components/features/add-gas';
import ScanModal from '~/components/features/scan';
export default function Header() {
  const [showGas, setShowGas] = useState(false);
  const [showScan, setShowScan] = useState(false);
  return (
    <View className="fl flex h-16 w-full flex-row items-center justify-between bg-background px-2">
      <View className="flex flex-row items-center justify-center gap-1">
        <Image source={Logo} className="h-8 w-8" />
        <Text className="text-3xl font-bold text-white" style={{ fontFamily: 'GaeilgeKids' }}>
          Shima
        </Text>
      </View>
      <View className="flex flex-row items-center justify-center gap-2">
        <Button className="h-10 w-10 bg-white" onPress={() => setShowScan(true)}>
          <Scan size={20} color="black" strokeWidth={3} />
        </Button>
        <Button
          className="flex flex-row items-center justify-center gap-1 rounded-lg bg-white px-2 py-1"
          onPress={() => setShowGas(true)}>
          <Image source={GasBlack} className="h-5 w-5" />
          <Text className="text-base font-bold text-black/80">$20.30</Text>
        </Button>
      </View>
      <AddGas showGas={showGas} setShowGas={setShowGas} />
      <ScanModal showScan={showScan} setShowScan={setShowScan} />
    </View>
  );
}
