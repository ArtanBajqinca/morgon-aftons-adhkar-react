import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

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
    activeOpacity={1}
    className="flex-row items-center"
    onPress={onToggle}
  >
    <View
      className={`w-[25px] h-[25px] rounded-[5px] border-2 border-beige-500 items-center justify-center ${
        isChecked ? 'bg-beige-500' : 'bg-transparent'
      }`}
    >
      {isChecked && (
        <Image
          source={require('@/assets/icons/check-icon.png')}
          className="w-[17px]"
          resizeMode="contain"
        />
      )}
    </View>
    <Text className="ml-4 text-beige-500 font-avenir-heavy text-[19px]">
      {label}
    </Text>
  </TouchableOpacity>
);

export default CheckboxOption;
