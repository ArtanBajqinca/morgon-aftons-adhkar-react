import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

interface NameWithLinkedInProps {
  name: string;
  linkedInUrl: string;
}

const NameWithLinkedIn: React.FC<NameWithLinkedInProps> = ({
  name,
  linkedInUrl,
}) => (
  <View className="flex-row items-center mt-2">
    <Text className="text-beige-500 text-[18px] text-left font-avenir-heavy">
      {name}
    </Text>
    <TouchableOpacity onPress={() => Linking.openURL(linkedInUrl)}>
      <Image
        source={require('@/assets/icons/linkedin-icon.png')}
        className="h-[24px] w-[24px] ml-3"
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>
);

export default NameWithLinkedIn;
