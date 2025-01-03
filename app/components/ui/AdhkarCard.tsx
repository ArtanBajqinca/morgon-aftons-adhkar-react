import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

interface AdhkarCardProps {
  id: number;
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
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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

        <Text className="text-[20px] font-avenir-heavy tracking-[0.1px] text-gray-500 leading-[25px]">
          {sv}
        </Text>

        {repetitionText && (
          <Text className="text-[14px] font-noto-sans-semi-bold text-beige-700 pt-[0px]">
            {repetitionText}
          </Text>
        )}

        <Text className="text-[20px] font-avenir-heavy tracking-[0.1px] text-gray-500 pt-[20px] leading-[25px]">
          {transliteration}
        </Text>

        {repetitionText && (
          <Text className="text-[14px] font-noto-sans-semi-bold text-beige-700 pt-[0px]">
            {repetitionText}
          </Text>
        )}

        <Text className="text-[28px] font-me-quran text-right text-gray-500 pt-[26px] leading-[49px]">
          {ar}
        </Text>

        {repetitionTextArabic && (
          <Text className="text-[19px] font-me-quran text-beige-700 mt-[-5px] text-right">
            {repetitionTextArabic}
          </Text>
        )}

        <View className="flex-row items-center mt-[14px]">
          <Text className="flex-1 text-[15px] align-middle font-avenir-roman text-gray-500">
            {source}
          </Text>

          {reward && (
            <View className="flex-row">
              <TouchableOpacity
                onPress={handlePress}
                className="bg-beige-600 rounded-[20px] px-4 py-0 pt-[2px]"
              >
                <Text className="text-[14px] flex-1 font-avenir-black text-beige-500 my-[4px]">
                  LÄS BELÖNING
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {reward && (
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
            onPress={closeModal}
          >
            <View className="bg-beige-500 rounded-lg p-6 w-4/5">
              <Text className="text-[17px] font-avenir-medium text-gray-500 leading-[22px] text-left mb-7">
                {reward}
              </Text>
              <View className="w-full">
                <Pressable
                  onPress={closeModal}
                  className="bg-beige-600 rounded-lg px-6 py-[2px]"
                >
                  <Text className="text-[16px] font-avenir-black tracking-[3px] text-beige-500 text-center ">
                    STÄNG
                  </Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

export default AdhkarCard;
