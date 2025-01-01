import { forwardRef } from 'react';
import {
  Image,
  Pressable,
  type ImageSourcePropType,
  type PressableProps,
  type View,
} from 'react-native';

interface IImageButtonProps extends PressableProps {
  image: ImageSourcePropType;
}

const ImageButton = forwardRef<View, IImageButtonProps>(
  ({ image, onPress, className, ...props }, ref) => (
    <Pressable
      ref={ref}
      onPress={onPress}
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
  )
);

ImageButton.displayName = 'ImageButton';

export default ImageButton;
