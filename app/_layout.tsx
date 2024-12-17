import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import type { FontSource } from 'expo-font';
import { StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export default function RootLayout() {
  React.useEffect(() => {
    // Navigation bar configuration
    async function configureNavigationBar() {
      await NavigationBar.setBackgroundColorAsync('#363636');
      await NavigationBar.setButtonStyleAsync('light');
      await NavigationBar.setBorderColorAsync('#363636');
    }
    configureNavigationBar();
  }, []);

  const [fontsLoaded] = useFonts({
    'Avenir-Black': require('@/assets/fonts/Avenir-Black.ttf') as FontSource,
    'Avenir-Book': require('@/assets/fonts/Avenir-Book.ttf') as FontSource,
    'Avenir-Heavy': require('@/assets/fonts/Avenir-Heavy.ttf') as FontSource,
    'Avenir-Medium': require('@/assets/fonts/Avenir-Medium.ttf') as FontSource,
    'Avenir-Roman': require('@/assets/fonts/Avenir-Roman.ttf') as FontSource,
    'Avenir-Light': require('@/assets/fonts/Avenir-Light.ttf') as FontSource,
    'Lora-Bold': require('@/assets/fonts/Lora-Bold.ttf') as FontSource,
    'Lora-Regular': require('@/assets/fonts/Lora-Regular.ttf') as FontSource,
    'Me-Quran': require('@/assets/fonts/Me-Quran.ttf') as FontSource,
    'Noto-Sans-Arabic':
      require('@/assets/fonts/Noto-Sans-Arabic.ttf') as FontSource,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* StatusBar Configuration */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack>
        <Stack.Screen
          name="views/start-screen"
          options={{
            gestureEnabled: true,
            headerShown: false,
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="views/morgon-screen"
          options={{
            gestureEnabled: true,
            headerShown: false,
            headerTitle: 'Morning Adhkar',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="views/afton-screen"
          options={{
            gestureEnabled: true,
            headerShown: false,
            headerTitle: 'Evening Adhkar',
            animation: 'fade',
          }}
        />
      </Stack>
    </>
  );
}
