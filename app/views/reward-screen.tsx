import '@/globals.css';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';
import TimeReward from '@/app/components/ui/TimeReward';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RewardScreen() {
  return (
    <View className="flex-1 bg-blue-500">
      {/* Background Image */}
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

      <SafeAreaView className="flex-1 px-12">
        {/* Content */}
        <View className="flex-1 ">
          <View className="items-center">
            <View className="pr-24 w-full">
              <Text className="text-white text-left text-[38px]  font-avenir-black leading-[40px] pt-4">
                Fördelarna med adhkar
              </Text>
            </View>

            <View className="flex-col w-full mt-10 gap-8">
              <TimeReward
                title="Närhet till Allah"
                titleColor="#4A96CA"
                icon={require('@/assets/icons/hand-heart.png')}
                iconWidth={45}
                RightSpace={0}
                description="Genom att praktisera adhkar stärker en person sin tro och förbättrar sin relation med Allah."
              />
              <TimeReward
                title="Sinnesro & Lugn"
                titleColor="#4A96CA"
                icon={require('@/assets/icons/belief-icon.png')}
                iconWidth={41}
                RightSpace={0}
                description="Adhkar erbjuder ett sätt att hitta lugn och ro i hjärtat."
              />
              <TimeReward
                title="Skydd"
                titleColor="#4A96CA"
                icon={require('@/assets/icons/shield-icon.png')}
                iconWidth={45}
                RightSpace={0}
                description="Regelbunden adhkar är ett skydd mot onda influenser."
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
