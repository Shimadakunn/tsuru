import * as Haptics from 'expo-haptics';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#556CDE',
          borderWidth: 1,
          borderColor: '#2A2A2A',
          paddingHorizontal: 20,
          height: 100,
        },
      }}>
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/public/tab-icons/clock.png')
                  : require('~/public/tab-icons/clock-empty.png')
              }
              className="h-8 w-8"
              resizeMode="contain"
            />
          ),
        }}
        listeners={{
          tabPress: async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/public/tab-icons/wallet.png')
                  : require('~/public/tab-icons/wallet-empty.png')
              }
              className="h-9 w-9"
              resizeMode="contain"
            />
          ),
        }}
        listeners={{
          tabPress: async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/public/tab-icons/coins.png')
                  : require('~/public/tab-icons/coins-empty.png')
              }
              className="h-9 w-9"
              resizeMode="contain"
            />
          ),
        }}
        listeners={{
          tabPress: async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        }}
      />
    </Tabs>
  );
}
