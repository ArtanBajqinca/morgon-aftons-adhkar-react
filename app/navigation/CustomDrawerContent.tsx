import { View, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ayah from '../components/ui/Ayah';

interface DrawerButtonProps {
  icon: any;
  label: string;
  onPress: () => void;
  className?: string;
}

const DrawerButton = ({ icon, label, onPress, className = "" }: DrawerButtonProps & { className?: string }) => (
  <Pressable
    onPress={onPress}
    className={`flex-row items-center px-6 py-3 mb-4 rounded-lg active:opacity-80 w-[190px] ${className}`}
  >
    <Image source={icon} className="w-8 h-8 mr-4" resizeMode="contain" />
    <Text 
      className="text-white text-lg font-avenir-medium pr-3"
      numberOfLines={2}
    >
      {label}
    </Text>
  </Pressable>
);

export default function CustomDrawerContent() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center bg-beige-800">
      <View className="w-full h-full">
        <Image
          source={require('@/assets/images/background-overlay.png')}
          className="absolute w-full h-full opacity-60"
        />
        
        {/* Logo Section */}
        <View className="items-center mt-[75px] mb-12">
          <Image
            source={require('@/assets/images/logo.png')}
            className="w-[118px] h-[92px]"
          />
        </View>

        {/* Buttons Section */}
        <View className="space-y-4">
          <DrawerButton
            icon={require('@/assets/icons/clock-icon.png')}
            label="Tiderna för morgon & afton"
            onPress={() => {}}
            className="bg-orange-500"
          />
          <DrawerButton
            icon={require('@/assets/icons/hand-star-icon.png')}
            label={"Fördelarna\nmed adhkar"}
            onPress={() => {}}
            className="bg-blue-500"
          />
        </View>

        {/* Quote Section */}
        <View className="absolute bottom-24 px-6">
          <View className="rounded-2xl p-4">
            <Ayah />
          </View>
        </View>

        {/* App Info Button */}
        <View className="absolute bottom-12 w-full items-center">
          <Pressable
            className="bg-beige-500 rounded-lg px-7 py-3 flex-row items-center w-[156px]"
            onPress={() => {}}
          >
            <Image
              source={require('@/assets/icons/info-icon.png')}
              className="w-5 h-5 mr-2"
            />
            <Text className="text-beige-800 text-lg font-avenir-medium font-bold" >
              APP INFO
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
