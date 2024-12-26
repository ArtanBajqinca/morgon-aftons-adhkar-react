import '@/globals.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';
import BackgroundOverlay from '@/app/components/ui/BackgroundOverlay';

export default function AftonScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-10">
      <BackgroundOverlay />

      <Text className="text-black text-[24px] font-bold">Afton Screen</Text>

      <Link asChild href="/">
        <BackButton />
      </Link>
    </View>
  );
}
