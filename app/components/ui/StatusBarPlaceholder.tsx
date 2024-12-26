import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StatusBarPlaceholder = () => (
  <SafeAreaView
    style={{
      width: '100%',
      height: STATUS_BAR_HEIGHT,
      backgroundColor: '#363636', // Set your desired background color here
    }}
    edges={['top']} // Ensure it only affects the top edge
  >
    <StatusBar barStyle="light-content" backgroundColor="#363636" />
  </SafeAreaView>
);

export default StatusBarPlaceholder;
