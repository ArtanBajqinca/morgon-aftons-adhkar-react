import React, { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import useLoadFonts from '@/app/hooks/useLoadFonts';
import configureNavigationBar from '@/app/utils/configureNavigationBar';

export default function RootLayout() {
  
  // Configure Navigation Bar
  configureNavigationBar();

  // Load Fonts
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hide();

  return (
    <>
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
      </Stack>
    </>
  );
}
