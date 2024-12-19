import { View, Image } from 'react-native';

export default function CustomDrawerContent() {
  return (
    <View className="flex-1 items-center bg-beige-800">
      <View className=" w-full h-full">
        <Image
          source={require('@/assets/images/background-overlay.png')}
          className="absolute w-full h-full opacity-60"
        />
        <View className="flex-1 items-center">
          <Image
            source={require('@/assets/images/logo.png')}
            className="w-[118px] h-[92px] mt-[75px]"
          />
        </View>
      </View>
    </View>
  );
}
