import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '~/components/header';
import { Expandable, ExpandableContent, ExpandableTrigger } from '~/components/ui/rectangle';
import Balance from '~/components/wallet-page/balance';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-background" edges={['top', 'left', 'right']}>
        <Header />
        <Balance />
        <Expandable>
          <ExpandableTrigger>
            <View className="p-4">
              <Text className="text-lg font-medium">Your Transactions</Text>
              <Text className="text-gray-600">Tap to view all transactions</Text>
            </View>
          </ExpandableTrigger>
          <ExpandableContent>
            <View className="flex-1">
              <Text className="mb-4 text-xl font-bold">Transaction History</Text>
              <Text>Your detailed transaction history will appear here</Text>
            </View>
          </ExpandableContent>
        </Expandable>
      </SafeAreaView>
    </>
  );
}
