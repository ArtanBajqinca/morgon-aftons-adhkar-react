import '@/globals.css';
import { View, Image, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import BackButton from '@/app/components/ui/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundOverlay from '@/app/components/ui/BackgroundOverlay';
import getAppVersion from '@/app/utils/getAppVersion';
import NameWithLinkedIn from '@/app/components/ui/NameWithLinkedIn';
import AboutButton from '@/app/components/ui/AboutButton';

export default function AboutScreen() {
  const version = getAppVersion();
  const currentYear = new Date().getFullYear();

  return (
    <ScrollView className="flex-1 bg-beige-500">
      <BackgroundOverlay />

      <SafeAreaView className="z-10">
        <View className="flex-row items-center mt-[40px]">
          <Link asChild href="../">
            <BackButton />
          </Link>
        </View>
        <View className="px-12 pt-12">
          <View className="bg-gray-500 px-12 rounded-[10px] items-center py-8">
            <View className="w-full items-center">
              <Image
                source={require('@/assets/images/logo.png')}
                className="h-[100px] mb-6"
                resizeMode="contain"
              />
              {/* Dynamically changes version according to app.json */}
              <Text className="text-beige-500 text-[18px] text-center mb-10 font-avenir-light">
                Version {version}
              </Text>
              <View className="w-full mb-10">
                <Text className="text-beige-500  text-[18px] font-avenir-light">
                  Utvecklarna:
                </Text>
                <View className=" flex-col mt-2">
                  <NameWithLinkedIn
                    name="Artan Bajqinca"
                    linkedInUrl="https://www.linkedin.com/in/artanbajqinca/"
                  />
                  <Text className="text-beige-500 font-avenir-light">
                    UX/UI Design, Utveckling
                  </Text>
                  <NameWithLinkedIn
                    name="Mohammad Obihony"
                    linkedInUrl="https://www.linkedin.com/in/mohammad-winter/"
                  />
                  <Text className="text-beige-500 font-avenir-light">
                    Utveckling
                  </Text>
                </View>
              </View>
              <View className="w-full mb-6">
                <AboutButton
                  label="Intergitetspolicy"
                  onPress={() => {
                    /* handle privacy policy */
                  }}
                />
                <AboutButton
                  label="Användarvillkor"
                  onPress={() => {
                    /* handle terms of use */
                  }}
                />
                <AboutButton
                  label="Källkodslicenser"
                  onPress={() => {
                    /* handle source code licenses */
                  }}
                />
              </View>
              <View className="items-center">
                <Text className="text-beige-500 text-[14px] text-center font-avenir-light">
                  © {currentYear} Skyddad av upphovsrätten
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
