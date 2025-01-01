import { forwardRef } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const StartSettingsTab = forwardRef<View>((props, ref) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View className="">
      <TouchableOpacity
        ref={ref}
        onPress={handlePress}
        className="h-[48px] w-[64px] items-end justify-center bg-gray-500 rounded-tr-[10px] rounded-br-[10px] pr-5"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}
        activeOpacity={0.9}
      >
        <Image
          source={require('@/assets/icons/hamburger-icon.png')}
          className="w-[25px] h-[21px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
});

StartSettingsTab.displayName = 'StartSettingsTab';

export default StartSettingsTab;
