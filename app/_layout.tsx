import '../global.css';
import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Expandable } from '~/components/ui/rectangle';

export const unstable_settings = {
  initialRouteName: '(app)',
};

export default function RootLayout() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        GaeilgeKids: require('../public/fonts/GaeilgeKids.otf'),
        Lexend_100Thin: require('../node_modules/@expo-google-fonts/lexend/Lexend_100Thin.ttf'),
        Lexend_200ExtraLight: require('../node_modules/@expo-google-fonts/lexend/Lexend_200ExtraLight.ttf'),
        Lexend_300Light: require('../node_modules/@expo-google-fonts/lexend/Lexend_300Light.ttf'),
        Lexend_400Regular: require('../node_modules/@expo-google-fonts/lexend/Lexend_400Regular.ttf'),
        Lexend_500Medium: require('../node_modules/@expo-google-fonts/lexend/Lexend_500Medium.ttf'),
        Lexend_600SemiBold: require('../node_modules/@expo-google-fonts/lexend/Lexend_600SemiBold.ttf'),
        Lexend_700Bold: require('../node_modules/@expo-google-fonts/lexend/Lexend_700Bold.ttf'),
        Lexend_800ExtraBold: require('../node_modules/@expo-google-fonts/lexend/Lexend_800ExtraBold.ttf'),
        Lexend_900Black: require('../node_modules/@expo-google-fonts/lexend/Lexend_900Black.ttf'),
      });
    }

    loadFonts();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
