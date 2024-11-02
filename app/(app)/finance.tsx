import { Stack } from 'expo-router';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="bg-background flex-1">
        <Text>Coins</Text>
      </SafeAreaView>
    </>
  );
}
