import { View, Image, Text, Pressable } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ayah from '../components/ui/Ayah';
import DrawerButton from '../components/ui/DrawerButton';

export default function StartDrawerContent() {
  // const navigation = useNavigation();

  return (
    <View className="flex-1 bg-beige-800">
      {/* Background Overlay */}
      <Image
        source={require('@/assets/images/background-overlay.png')}
        className="absolute w-full h-full opacity-60"
      />

      <SafeAreaView className="flex-1">
        <View className="flex-1 ">
          {/* Top Section */}
          <View>
            {/* Logo Section */}
            <View className="items-center py-[70px] ">
              <Image
                source={require('@/assets/images/logo.png')}
                className="h-[100px]"
                resizeMode="contain"
              />
            </View>

            {/* Buttons Section */}
            <View className="">
              <DrawerButton
                icon={require('@/assets/icons/clock-icon.png')}
                label="Tiderna för morgon & afton"
                onPress={() => {}}
                backgroundColor="#F0981E"
                iconWidth={29}
              />
              <DrawerButton
                icon={require('@/assets/icons/hand-star-icon.png')}
                label={'Fördelarna\nmed adhkar'}
                onPress={() => {}}
                backgroundColor="#4A96CA"
                iconWidth={34}
              />
            </View>
          </View>
          <View className="flex-1 items-center">
            {/* Ayah Section */}
            <View className="flex-1 justify-end mb-[20px]">
              <Ayah />
            </View>

            {/* App Info Button */}
            <Pressable
              className="bg-beige-500 w-[156px] h-[30px] rounded-[5px] flex-row items-center justify-center mb-[40px]"
              onPress={() => {}}
            >
              <View className="flex-row items-center justify-center">
                <Image
                  source={require('@/assets/icons/info-icon.png')}
                  className="h-[22px] w-[22px] mr-4"
                />
                <Text className="text-beige-800 text-[14px] font-avenir-black">
                  APP INFO
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
