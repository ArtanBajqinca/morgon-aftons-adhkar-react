import '@/globals.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/app/components/ui/Button';

export default function AftonScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-10">
      <Text className="text-black text-[24px] font-bold">Afton Screen</Text>

      <Link asChild href="/">
        <Button label="Start" />
      </Link>
    </View>
  );
}
