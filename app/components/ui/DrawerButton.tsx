import React, { forwardRef } from 'react';
import { Pressable, Image, Text, View } from 'react-native';
import { type ImageSourcePropType } from 'react-native';
import * as Haptics from 'expo-haptics';

interface DrawerButtonProps {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
  backgroundColor: string;
  iconWidth: number;
}

const DrawerButton = forwardRef<View, DrawerButtonProps>(
  ({ icon, label, onPress, backgroundColor, iconWidth }, ref) => {
    const handlePress = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
      onPress();
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        style={{ backgroundColor }}
        className="h-[70px] w-[210px] rounded-tr-[10px] rounded-br-[10px] flex-row items-center mb-[30px] active:opacity-80"
      >
        <Image
          source={icon}
          className="w-[30px] h-[30px] mx-5"
          resizeMode="contain"
          style={{ width: iconWidth, height: iconWidth }}
        />
        <View className="flex-1 justify-center">
          <Text
            className="text-white text-[16.5px] font-avenir-heavy py-2 pt-4 leading-[17px] mr-5"
            numberOfLines={2}
          >
            {label}
          </Text>
        </View>
      </Pressable>
    );
  }
);

DrawerButton.displayName = 'DrawerButton';

export default DrawerButton;
