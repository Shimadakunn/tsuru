import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '~/components/header';
import Actions from '~/components/pages/actions';
import Balance from '~/components/pages/balance';
import Cryptos from '~/components/pages/cryptos';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView className="flex-1 bg-background" edges={['top', 'left', 'right']}>
        <View className="mb-4 w-full">
          <Header />
          <Balance />
          <Actions />
        </View>
        <Cryptos />
        {/* <Footer /> */}
      </SafeAreaView>
    </>
  );
}
