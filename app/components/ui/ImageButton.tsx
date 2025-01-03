import { forwardRef } from 'react';
import {
  Image,
  Pressable,
  type ImageSourcePropType,
  type PressableProps,
  type View,
} from 'react-native';
import * as Haptics from 'expo-haptics';

interface IImageButtonProps extends PressableProps {
  image: ImageSourcePropType;
}

const ImageButton = forwardRef<View, IImageButtonProps>(
  ({ image, onPress, className, ...props }, ref) => {
    const handlePress = (event) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
      if (onPress) {
        onPress(event);
      }
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        className={`active:opacity-90 items-center justify-center ${className}`}
        {...props}
      >
        <Image
          source={image}
          className="h-full w-[100.2%]"
          resizeMode="cover"
          accessibilityLabel="Image Button"
        />
      </Pressable>
    );
  }
);

ImageButton.displayName = 'ImageButton';

export default ImageButton;
