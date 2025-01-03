import React from 'react';
import '@/globals.css';
import { View, ScrollView } from 'react-native';
import TopBar from '@/app/components/ui/TopBar';
import AdhkarDrawerContent from '@/app/drawer/AdhkarDrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StatusBarPlaceholder from '@/app/components/ui/StatusBarPlaceholder';
import drawerScreenOptions from '@/app/navigation/drawerOption';
import adhkarMorgonData from '@/app/models/data/adhkar_morgon.json';
import AdhkarTitleComponent from '../components/ui/AdhkarTitleComponent';
import AdhkarCard from '../components/ui/AdhkarCard';
import BottomDivider from '../components/ui/BottomDivider';

const AdhkarDrawer = createDrawerNavigator();

function MorgonContent() {
  return (
    <View className="flex-1">
      <StatusBarPlaceholder />
      <TopBar title="Morgons adhkar" />
      <ScrollView className="flex-1 bg-beige-500">
        <AdhkarTitleComponent
          arabicTitle="أذكار الصباح"
          swedishTitle="Morgons adhkar"
          description="DENS TID ÄR EFTER FAJR-BÖNEN FRAM TILL SOLUPPGÅNGEN"
        />
        {adhkarMorgonData.map((adhkar) => (
          <AdhkarCard key={adhkar.id} {...adhkar} />
        ))}
        <BottomDivider />
      </ScrollView>
    </View>
  );
}

export default function MorgonScreen() {
  return (
    <AdhkarDrawer.Navigator
      drawerContent={AdhkarDrawerContent}
      screenOptions={drawerScreenOptions}
    >
      <AdhkarDrawer.Screen
        name="MorgonContent"
        component={MorgonContent}
        options={{ headerShown: false }}
      />
    </AdhkarDrawer.Navigator>
  );
}
