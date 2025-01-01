import React from 'react';
import { View, Text } from 'react-native';

interface AdhkarTitleComponentProps {
  arabicTitle: string;
  swedishTitle: string;
  description: string;
}

const AdhkarTitleComponent: React.FC<AdhkarTitleComponentProps> = ({
  arabicTitle,
  swedishTitle,
  description,
}) => (
  <View className="flex-1">
    {/* Top bar */}
    <View className="h-[10px] bg-beige-550 mt-[60px]" />

    {/* Titles */}
    <Text className="text-center text-[38px] font-noto-sans-arabic-extra-bold mt-[30px] text-gray-500">
      {arabicTitle}
    </Text>
    <Text className="text-center text-[38px] font-avenir-black text-gray-500">
      {swedishTitle}
    </Text>

    <View className="flex-1">
      <View className="mx-14">
        {/* Description */}
        <Text className="text-center text-[15px] font-avenir-roman text-gray-500 mt-[15px] mb-[50px] tracking-widest">
          {description}
        </Text>
      </View>
    </View>
  </View>
);

export default AdhkarTitleComponent;
