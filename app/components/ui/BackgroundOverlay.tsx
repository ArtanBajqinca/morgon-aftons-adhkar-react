import { Image } from 'react-native';

const BackgroundOverlay = () => (
  <Image
    source={require('@/assets/images/background-overlay1.png')}
    className="absolute w-full h-full opacity-10"
  />
);

export default BackgroundOverlay;
