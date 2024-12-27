import React from 'react';
import { View, Image, Text, Pressable, TouchableOpacity } from 'react-native';

interface CheckboxOptionProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  label,
  isChecked,
  onToggle,
}) => (
  <TouchableOpacity
    onPressIn={onToggle}
    activeOpacity={0.8}
    hitSlop={{ top: 5, bottom: 5, left: 30, right: 30 }}
  >
    <Text>
      <View className="flex-row items-center w-full">
        <View
          className={`w-[25px] h-[25px] rounded-[5px] border-2 border-beige-500 items-center justify-center ${
            isChecked ? 'bg-beige-500' : 'bg-transparent'
          }`}
        >
          {isChecked && (
            <Image
              source={require('@/assets/icons/check-icon.png')}
              className="w-[19px]"
              resizeMode="contain"
            />
          )}
        </View>
        <Text className="ml-4 text-beige-500 font-avenir-heavy text-[19px]">
          {label}
        </Text>
      </View>
    </Text>
  </TouchableOpacity>
);

export default CheckboxOption;
