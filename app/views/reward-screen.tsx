import '@/globals.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';
import TimeReward from '@/app/components/ui/TimeReward';

import BackgroundOverlay from '@/app/components/ui/BackgroundOverlay';

export default function RewardScreen() {
  return (
    <View className="flex-1 bg-blue-500">
      <BackgroundOverlay />

      <Link asChild href="../">
        <BackButton />
      </Link>

      <View className="flex-1 px-10 mt-[4vh]">
        {/* Content */}
        <View className="flex-1">
          <View className="pr-[60px] w-full">
            <Text className="text-white text-left text-[38px]  font-avenir-black leading-[40px] pt-4">
              Fördelarna med adhkar
            </Text>
          </View>

          <View className="flex-col w-full mt-[3vh] gap-8">
            <TimeReward
              title="Närhet till Allah"
              titleColor="#4A96CA"
              icon={require('@/assets/icons/belief-icon.png')}
              iconWidth={47}
              RightSpace={0}
              description="Genom att praktisera adhkar stärker en person sin tro och förbättrar sin relation med Allah."
            />
            <TimeReward
              title="Sinnesro & Lugn"
              titleColor="#4A96CA"
              icon={require('@/assets/icons/hand-heart.png')}
              iconWidth={40}
              RightSpace={0}
              description="Adhkar erbjuder ett sätt att hitta lugn och ro i hjärtat."
            />
            <TimeReward
              title="Skydd"
              titleColor="#4A96CA"
              icon={require('@/assets/icons/shield-icon.png')}
              iconWidth={41}
              RightSpace={0}
              description="Regelbunden adhkar är ett skydd mot onda influenser."
            />
          </View>
        </View>
      </View>
    </View>
  );
}
