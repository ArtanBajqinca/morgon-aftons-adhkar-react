import '@/globals.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/app/components/ui/Button';

export default function StartScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-10">
      <Text className="text-black text-[20px] font-avenir-medium mx-[60px]">
        Morgon & aftons adhkar app in React Native with the Expo framework,
        using NativeWind CSS and TypeScript built in a MVVM software
        architecture.
      </Text>

      <Text className="text-black text-[24px] font-avenir-black">
        Start Screen
      </Text>

      <Link asChild href="/views/morgon-screen">
        <Button label="Morgon" />
      </Link>

      <Link asChild href="/views/afton-screen">
        <Button label="Afton" />
      </Link>
    </View>
  );
}
