import React from 'react';
import { Pressable, Image, Text, View } from 'react-native';
import { type ImageSourcePropType } from 'react-native';

interface DrawerButtonProps {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
  backgroundColor: string;
  iconWidth?: number;
}

const DrawerButton: React.FC<DrawerButtonProps> = ({
  icon,
  label,
  onPress,
  backgroundColor,
  iconWidth,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ backgroundColor }}
      className="h-[70px] w-[210px] rounded-tr-[10px] rounded-br-[10px] flex-row items-center mb-[30px]"
    >
      <Image
        source={icon}
        className="w-[30px] h-[30px] mx-5"
        resizeMode="contain"
        style={{ width: iconWidth, height: iconWidth }}
      />
      <View className="flex-1 justify-center">
        <Text
          className="text-white text-[16.1px] font-avenir-heavy  py-2 pt-5 leading-[16px] mr-5"
          numberOfLines={2}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default DrawerButton;
