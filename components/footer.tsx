import * as Haptics from 'expo-haptics';
import { useRouter, usePathname } from 'expo-router';
import { View, Image, Pressable } from 'react-native';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View className="absolute bottom-0 flex h-24 w-full flex-row items-start justify-around border-t border-gray-200 bg-background px-2 pt-4">
      <Pressable
        onPress={() => {
          router.replace('/wallet');
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}>
        <Image
          source={
            pathname === '/wallet'
              ? require('~/public/tab-icons/wallet.png')
              : require('~/public/tab-icons/wallet-empty.png')
          }
          className="h-9 w-9"
          resizeMode="contain"
        />
      </Pressable>
      <Pressable
        onPress={() => {
          router.replace('/history');
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}>
        <Image
          source={
            pathname === '/history'
              ? require('~/public/tab-icons/clock.png')
              : require('~/public/tab-icons/clock-empty.png')
          }
          className="h-8 w-8"
          resizeMode="contain"
        />
      </Pressable>
      <Pressable
        onPress={() => {
          router.replace('/finance');
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}>
        <Image
          source={
            pathname === '/finance'
              ? require('~/public/tab-icons/coins.png')
              : require('~/public/tab-icons/coins-empty.png')
          }
          className="h-9 w-9"
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}
