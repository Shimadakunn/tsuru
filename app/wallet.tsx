import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Footer from '~/components/footer';
import Header from '~/components/header';
import Balance from '~/components/pages/wallet-page/balance';
import Cryptos from '~/components/pages/wallet-page/cryptos';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView className="flex-1 bg-background" edges={['top', 'left', 'right']}>
        <View className="mb-4 w-full">
          <Header />
          <Balance />
        </View>
        <Cryptos />
        <Footer />
      </SafeAreaView>
    </>
  );
}
