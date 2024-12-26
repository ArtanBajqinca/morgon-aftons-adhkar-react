import '@/globals.css';
import { View, StatusBar } from 'react-native';
import BackgroundOverlay from '@/app/components/ui/BackgroundOverlay';
import TopBar from '@/app/components/ui/TopBar';

export default function MorgonScreen() {
  return (
    <View className="flex-1 bg-[#F5E8B0]">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#363636"
        translucent
      />
      <BackgroundOverlay />
      <TopBar title="Morgons adhkar" />
    </View>
  );
}
