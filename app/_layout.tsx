import { useCallback, useEffect, useState } from 'react';
import { SplashScreen } from 'expo-router';
import { StatusBar, Platform, View } from 'react-native';
import useLoadFonts from '@/app/hooks/useLoadFonts';
import configureNavigationBar from '@/app/utils/configureNavigationBar';
import { Stack } from 'expo-router/stack';

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
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="views/morgon-screen"
          options={
            Platform.OS === 'android'
              ? { presentation: 'transparentModal' }
              : {}
          }
        />
        <Stack.Screen
          name="views/afton-screen"
          options={
            Platform.OS === 'android'
              ? { presentation: 'transparentModal' }
              : {}
          }
        />
        <Stack.Screen
          name="views/reward-screen"
          options={
            Platform.OS === 'android'
              ? { presentation: 'transparentModal' }
              : {}
          }
        />
        <Stack.Screen
          name="views/time-screen"
          options={
            Platform.OS === 'android'
              ? { presentation: 'transparentModal' }
              : {}
          }
        />
        <Stack.Screen
          name="views/about-screen"
          options={
            Platform.OS === 'android'
              ? { presentation: 'transparentModal' }
              : {}
          }
        />
      </Stack>
    </View>
  );
}
