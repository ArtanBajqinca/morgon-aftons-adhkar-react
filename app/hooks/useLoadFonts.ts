import { useFonts } from 'expo-font';
import type { FontSource } from 'expo-font';

import {
  NotoSans_500Medium,
  NotoSans_600SemiBold,
} from '@expo-google-fonts/noto-sans';

export default function useLoadFonts() {
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
    'Noto-Sans-Arabic-ExtraBold':
      require('@/assets/fonts/Noto-Sans-Arabic-ExtraBold.ttf') as FontSource,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
  });

  return fontsLoaded;
}
