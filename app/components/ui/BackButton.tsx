import React, { forwardRef } from 'react';
import { Pressable, Image, View, type PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  onPress?: () => void;
}

const BackButton = forwardRef<View, ButtonProps>(
  ({ onPress, ...props }, ref) => (
    <Pressable
      ref={ref}
      onPress={onPress}
      className="bg-gray-500 w-[100px] h-[57px] rounded-r-[20px] active:opacity-90"
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
  )
);

BackButton.displayName = 'BackButton';

export default BackButton;
