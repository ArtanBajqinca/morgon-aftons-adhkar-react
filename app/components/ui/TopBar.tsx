import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    navigation.goBack();
  };

  const handleSettingsPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View>
      <View className="w-full h-[58px] bg-[#363636] flex-row items-center justify-between px-8">
        <Link asChild href="/">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleBackPress}
            style={{ padding: 10 }}
          >
            <Image
              source={require('@/assets/icons/back-icon.png')}
              className="w-[26px]"
              resizeMode="contain"
              tintColor="#F5E8B0"
            />
          </TouchableOpacity>
        </Link>

        <Text className="text-[23px] mx-100 text-beige-500 font-avenir-heavy">
          {title}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleSettingsPress}
          style={{ padding: 10 }}
        >
          <Image
            source={require('@/assets/icons/settings-icon.png')}
            className="w-[28px]"
            resizeMode="contain"
            tintColor="#F5E8B0"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
