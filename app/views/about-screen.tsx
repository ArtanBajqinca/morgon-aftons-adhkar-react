import '@/globals.css';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-beige-500 ">
      <Image
        source={require('@/assets/images/background-overlay1.png')}
        className="absolute w-full h-full opacity-10"
      />

      <SafeAreaView className="z-10">
        <View className="flex-row items-center mt-[40px] ">
          <Link asChild href="../">
            <BackButton />
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
}
