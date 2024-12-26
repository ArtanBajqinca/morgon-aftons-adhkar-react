import '@/globals.css';
import { View, StatusBar } from 'react-native';
import BackgroundOverlay from '@/app/components/ui/BackgroundOverlay';
import TopBar from '@/app/components/ui/TopBar';
import AdhkarDrawerContent from '@/app/drawer/AdhkarDrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AdhkarDrawer = createDrawerNavigator();

function AftonContent() {
  return (
    <View className="flex-1 bg-[#F5E8B0]">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#363636"
        translucent
      />
      <BackgroundOverlay />
      <TopBar title="Aftons adhkar" />
    </View>
  );
}

export default function AftonScreen() {
  return (
    <AdhkarDrawer.Navigator
      drawerContent={AdhkarDrawerContent}
      screenOptions={{
        drawerStyle: { width: 235 },
        drawerPosition: 'right',
        overlayColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <AdhkarDrawer.Screen
        name="AftonContent"
        component={AftonContent}
        options={{ headerShown: false }}
      />
    </AdhkarDrawer.Navigator>
  );
}
