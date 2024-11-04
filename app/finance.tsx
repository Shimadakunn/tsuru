import { Stack } from 'expo-router';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Footer from '~/components/footer';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-background">
        <Text>Coins</Text>
        <Footer />
      </SafeAreaView>
    </>
  );
}
