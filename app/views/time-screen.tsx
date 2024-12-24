import '@/globals.css';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';
import TimeReward from '@/app/components/ui/TimeReward';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TimeScreen() {
  return (
    <View className="flex-1 bg-orange-500">
      {/* Background Image */}
      <Image
        source={require('@/assets/images/background-overlay1.png')}
        className="absolute w-full h-full opacity-10"
      />

      <SafeAreaView className="z-10">
        <View className="flex-row items-center mt-[40px] ">
          <Link asChild href="../">
            <BackButton label="Back" />
          </Link>
        </View>
      </SafeAreaView>

      <SafeAreaView className="flex-1 px-10">
        {/* Content */}
        <View className="flex-1">
          <View className="items-center">
            <Text className="text-white text-left text-[38px] font-avenir-black leading-[40px] pt-4  w-full">
              Tiderna för morgon & afton
            </Text>

            <TimeReward
              title="Morgon"
              titleColor="#F0981E"
              icon={require('@/assets/icons/sunrise-icon.png')}
              iconWidth={45}
              description="Dens tid är efter Fajr-bönen\nfram till soluppgången"
            />

            <TimeReward
              title="Afton"
              titleColor="#F0981E"
              icon={require('@/assets/icons/evening-icon.png')}
              iconWidth={58}
              description="Dens tid är efter Asr-bönen\nfram till Isha-bönen"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
