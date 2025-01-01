import '@/globals.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';
import TimeReward from '@/app/components/ui/TimeReward';
import BackgroundOverlay from '@/app/components/ui/BackgroundOverlay';

export default function TimeScreen() {
  return (
    <View className="flex-1 bg-orange-500">
      <BackgroundOverlay />

      <Link asChild href="../">
        <BackButton />
      </Link>

      <View className="flex-1 px-10 mt-[4vh]">
        {/* Content */}
        <Text className="text-white text-left text-[38px] font-avenir-black leading-[40px] pt-4 w-full ">
          Tiderna för morgon & afton
        </Text>

        <View className="flex-col w-full justify-left mt-[3vh] gap-6 ">
          <TimeReward
            title="Morgon"
            titleColor="#F0981E"
            icon={require('@/assets/icons/sunrise-icon.png')}
            iconWidth={45}
            RightSpace={30}
            description="Dens tid är efter Fajr-bönen fram till soluppgången (Shuruq)"
          />

          <TimeReward
            title="Afton"
            titleColor="#F0981E"
            icon={require('@/assets/icons/evening-icon.png')}
            iconWidth={58}
            RightSpace={70}
            description="Dens tid är efter Asr-bönen fram till Isha-bönen"
          />
        </View>
      </View>
    </View>
  );
}
