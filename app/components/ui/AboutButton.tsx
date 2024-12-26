import React from 'react';
import { Pressable, Text } from 'react-native';

interface AboutButtonProps {
  label: string;
  onPress: () => void;
}

const AboutButton: React.FC<AboutButtonProps> = ({ label, onPress }) => (
  <Pressable
    onPress={onPress}
    className="py-1 bg-[#E6D7A6] rounded-[8px] items-center justify-center mb-[15px] active:opacity-80"
  >
    <Text className="text-gray-500 text-[14px] font-avenir-black">
      {label.toUpperCase()}
    </Text>
  </Pressable>
);

export default AboutButton;
