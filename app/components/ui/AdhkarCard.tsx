import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';

interface AdhkarCardProps {
  id: number;
  // eslint-disable-next-line react/no-unused-prop-types
  en?: string;
  sv: string;
  ar: string;
  transliteration: string;
  source: string;
  reward?: string;
  repetitionText?: string;
  repetitionTextArabic?: string;
}

const AdhkarCard: React.FC<AdhkarCardProps> = ({
  id,
  sv,
  ar,
  transliteration,
  source,
  reward,
  repetitionText,
  repetitionTextArabic,
}) => {
  const [showReward, setShowReward] = useState(false);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setShowReward(!showReward);
  };

  return (
    <View className="flex-1">
      <View className="h-[10px] bg-beige-550" />

      <View className="flex-col items-left mx-[3vh] mb-[30px]">
        <View className="flex-1 items-center justify-between">
          <View className="my-[30px]">
            <View className="flex items-center justify-center bg-orange-500 rounded-[7px] w-[38px] h-[38px]">
              <Text className="text-[23px] font-avenir-heavy text-beige-500">
                {id}
              </Text>
            </View>
          </View>
        </View>

        <Text className="text-[20px] font-avenir-heavy text-gray-500 leading-[25px]">
          {sv}
        </Text>

        {repetitionText && (
          <Text className="text-[14px] font-noto-sans-semi-bold text-beige-700 pt-[3px]">
            {repetitionText}
          </Text>
        )}

        <Text className="text-[20px] font-avenir-heavy text-gray-500 pt-[17px] leading-[25px]">
          {transliteration}
        </Text>

        {repetitionTextArabic && (
          <Text className="text-[14px] font-noto-sans-semi-bold text-beige-700 pt-[3px]">
            {repetitionTextArabic}
          </Text>
        )}

        <Text className="text-[27px] font-me-quran text-right text-gray-500 pt-[17px] leading-[49px]">
          {ar}
        </Text>

        {showReward && reward && (
          <Text className="text-[20px] text-right font-me-quran text-beige-700">
            {reward}
          </Text>
        )}

        <View className="flex-row items-center mt-[20px]">
          <Text className="flex-1 text-[15px] align-middle font-avenir-roman text-gray-500">
            {source}
          </Text>

          <View className="flex-row">
            <TouchableOpacity
              onPress={handlePress}
              className="bg-beige-600 rounded-[20px] px-4 py-0 pt-[2px]"
            >
              <Text className="text-[14px] flex-1 font-avenir-black text-beige-500 my-[4px]">
                {showReward ? 'DÖLJ BELÖNING' : 'LÄS BELÖNING'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdhkarCard;
