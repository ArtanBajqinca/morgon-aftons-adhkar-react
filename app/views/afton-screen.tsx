import '@/globals.css';
import { View } from 'react-native';
import TopBar from '@/app/components/ui/TopBar';
import AdhkarDrawerContent from '@/app/drawer/AdhkarDrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StatusBarPlaceholder from '@/app/components/ui/StatusBarPlaceholder';
import drawerScreenOptions from '@/app/navigation/drawerOption';
import AdhkarTitleComponent from '../components/ui/AdhkarTitleComponent';

const AdhkarDrawer = createDrawerNavigator();

function AftonContent() {
  return (
    <View className="flex-1 bg-[#F5E8B0]">
      <StatusBarPlaceholder />
      <TopBar title="Aftons adhkar" />
      <AdhkarTitleComponent
        arabicTitle="أذكار المساء"
        swedishTitle="Aftons Adhkar"
        description="DENS TID ÄR EFTER ASR-BÖNEN FRAM TILL SOLNEGÅNGEN"
      />
    </View>
  );
}

export default function AftonScreen() {
  return (
    <AdhkarDrawer.Navigator
      drawerContent={AdhkarDrawerContent}
      screenOptions={drawerScreenOptions}
    >
      <AdhkarDrawer.Screen
        name="AftonContent"
        component={AftonContent}
        options={{ headerShown: false }}
      />
    </AdhkarDrawer.Navigator>
  );
}
