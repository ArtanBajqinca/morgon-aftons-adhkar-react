import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface TimeRewardProps {
  title: string;
  titleColor: string;
  icon: ImageSourcePropType;
  iconWidth: number;
  description: string;
}

export default function TimeReward({
  title,
  titleColor,
  icon,
  iconWidth,
  description,
}: TimeRewardProps) {
  return (
    <View className="space-y-2">
      <View className="flex-row items-center space-x-2">
        <View className="bg-white px-6 pb-1 flex items-center justify-center mr-5">
          <Text
            className="font-lora-bold text-[22px] text-center"
            style={{ color: titleColor }}
          >
            {title}
          </Text>
        </View>
        <Image
          source={icon}
          style={{
            width: iconWidth,
            height: iconWidth,
          }}
          resizeMode="contain"
        />
      </View>
      <Text className="text-white text-[18px] bg-red-500 font-avenir-heavy leading-[20px] mt-5">
        {description}
      </Text>
    </View>
  );
}
