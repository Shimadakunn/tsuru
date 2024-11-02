import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '~/components/header';
import { ExpandableCard, ExpandableContent, ExpandableTrigger } from '~/components/ui/rectangle';
import Balance from '~/components/wallet-page/balance';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-background" edges={['top', 'left', 'right']}>
        <Header />
        <Balance />
      </SafeAreaView>
    </>
  );
}
