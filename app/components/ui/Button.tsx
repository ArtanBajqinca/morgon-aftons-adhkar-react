import React, { forwardRef } from 'react';
import { Pressable, Text, type PressableProps, type View } from 'react-native';

interface IButtonProps extends PressableProps {
  label: string;
}

const Button = forwardRef<View, IButtonProps>(
  ({ label, onPress, ...props }, ref) => (
    <Pressable
      ref={ref}
      onPress={onPress}
      className="rounded-lg bg-beige-600 px-6 py-3 active:opacity-70"
      {...props}
    >
      <Text className="text-2xl font-avenir-black text-white">{label}</Text>
    </Pressable>
  )
);

Button.displayName = 'Button';

export default Button;
