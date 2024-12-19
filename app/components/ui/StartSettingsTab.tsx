import { forwardRef } from 'react';
import { Pressable, View, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

interface IStartSettingsTabProps {
  onPress?: () => void;
}

const StartSettingsTab = forwardRef<View, IStartSettingsTabProps>(
  (props, ref) => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
      <View className="">
        <Pressable
          ref={ref}
          onPress={handlePress}
          className="h-[48px] w-[64px] items-end justify-center bg-gray-500 rounded-tr-[10px] rounded-br-[10px] pr-5 active:opacity-90"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
          }}
        >
          <Image
            source={require('@/assets/icons/hamburger-icon.png')}
            className="w-[25px] h-[21px]"
            resizeMode="contain"
          />
        </Pressable>
      </View>
    );
  }
);

StartSettingsTab.displayName = 'StartSettingsTab';

export default StartSettingsTab;
