import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface TimeRewardProps {
  title: string;
  titleColor: string;
  icon: ImageSourcePropType;
  iconWidth: number;
  description: string;
  RightSpace?: number;
}

export default function TimeReward({
  title,
  titleColor,
  icon,
  iconWidth,
  description,
  RightSpace = 0,
}: TimeRewardProps) {
  return (
    <View className="">
      <View className="flex-row items-center">
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
      <Text
        className="text-white text-[18px] font-avenir-heavy  leading-[22px] mt-4"
        style={{ marginRight: RightSpace }}
      >
        {description}
      </Text>
    </View>
  );
}
