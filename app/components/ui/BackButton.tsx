import React, { forwardRef } from 'react';
import { Pressable, Image, View, type PressableProps } from 'react-native';
import * as Haptics from 'expo-haptics';

interface ButtonProps extends PressableProps {
  onPress?: () => void;
}

const BackButton = forwardRef<View, ButtonProps>(
  ({ onPress, ...props }, ref) => {
    const handlePress = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
      if (onPress) {
        onPress();
      }
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        className="bg-gray-500 mt-[8vh] w-[100px] h-[57px] rounded-r-[20px] active:opacity-90"
        {...props}
      >
        <View className="flex-1 items-end justify-center pr-[30px]">
          <Image
            source={require('@/assets/icons/back-icon.png')}
            className="w-[28px]"
            resizeMode="contain"
            tintColor="white"
          />
        </View>
      </Pressable>
    );
  }
);

BackButton.displayName = 'BackButton';

export default BackButton;
