import { forwardRef } from 'react';
import { Pressable, View, Image, type PressableProps } from 'react-native';

interface IStartSettingsTabProps extends PressableProps {
  onPress?: () => void;
}

const StartSettingsTab = forwardRef<View, IStartSettingsTabProps>(
  ({ onPress, ...props }, ref) => (
    <View className="">
      <Pressable
        ref={ref}
        onPress={onPress}
        className="h-[48px] w-[64px] items-end justify-center bg-gray-500 rounded-tr-[10px] rounded-br-[10px] pr-5 active:opacity-70"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}
        {...props}
      >
        <Image
          source={require('@/assets/icons/hamburger-icon.png')}
          className="w-[25px] h-[21px]"
          resizeMode="contain"
        />
      </Pressable>
    </View>
  )
);

StartSettingsTab.displayName = 'StartSettingsTab';

export default StartSettingsTab;
