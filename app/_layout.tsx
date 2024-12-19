import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import type { FontSource } from 'expo-font';
import { StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import useLoadFonts from '@/app/hooks/useLoadFonts';
import configureNavigationBar from '@/app/utils/configureNavigationBar';

export default function RootLayout() {
  React.useEffect(() => {
    configureNavigationBar();
  }, []);

  const fontsLoaded = useLoadFonts();

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
