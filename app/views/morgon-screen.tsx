import '@/globals.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';

export default function MorgonScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-10">
      <Text className="text-black text-[24px] font-avenir-heavy">
        Morgon Screen
      </Text>

      <Link asChild href="/">
        <BackButton label="Start" />
      </Link>
    </View>
  );
}
