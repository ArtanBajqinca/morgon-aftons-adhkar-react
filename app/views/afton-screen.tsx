import React from 'react';
import '@/globals.css';
import { View, ScrollView } from 'react-native';
import TopBar from '@/app/components/ui/TopBar';
import AdhkarDrawerContent from '@/app/drawer/AdhkarDrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StatusBarPlaceholder from '@/app/components/ui/StatusBarPlaceholder';
import drawerScreenOptions from '@/app/navigation/drawerOption';
import adhkarAftonData from '@/app/models/data/adhkar_afton.json';
import AdhkarTitleComponent from '../components/ui/AdhkarTitleComponent';
import AdhkarCard from '../components/ui/AdhkarCard';
import BottomDivider from '../components/ui/BottomDivider';

const AdhkarDrawer = createDrawerNavigator();

function AftonContent() {
  return (
    <View className="flex-1 bg-[#F5E8B0]">
      <StatusBarPlaceholder />
      <TopBar title="Aftons adhkar" />
      <ScrollView className="flex-1 bg-beige-500">
        <AdhkarTitleComponent
          arabicTitle="أذكار المساء"
          swedishTitle="Aftons Adhkar"
          description="DENS TID ÄR EFTER ASR-BÖNEN FRAM TILL SOLNEGÅNGEN"
        />
        {adhkarAftonData.map((adhkar) => (
          <AdhkarCard key={adhkar.id} {...adhkar} />
        ))}
        <BottomDivider />
      </ScrollView>
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
