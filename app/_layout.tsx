import { useCallback, useEffect, useState } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar, Platform, View } from 'react-native';
import useLoadFonts from '@/app/hooks/useLoadFonts';
import configureNavigationBar from '@/app/utils/configureNavigationBar';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Load Fonts
  useLoadFonts();

  // Configure Navigation Bar (android)
  if (Platform.OS === 'android') {
    configureNavigationBar();
  }

  useEffect(() => {
    setAppIsReady(true);
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      {/* StatusBar Configuration */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {/* Stack Navigator */}
      <Stack>
        <Stack.Screen
          name="index"
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
        <Stack.Screen
          name="views/reward-screen"
          options={{
            gestureEnabled: true,
            headerShown: false,
            headerTitle: 'Rewards',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="views/time-screen"
          options={{
            gestureEnabled: true,
            headerShown: false,
            headerTitle: 'Morning & Evening Times',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="views/about-screen"
          options={{
            gestureEnabled: true,
            headerShown: false,
            headerTitle: 'App Info',
            animation: 'fade',
          }}
        />
      </Stack>
    </View>
  );
}
