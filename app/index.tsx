import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Link } from 'expo-router';
import ImageButton from '@/app/components/ui/ImageButton';
import StartSettingsTab from '@/app/components/ui/StartSettingsTab';
import StartDrawerContent from '@/app/navigation/StartDrawerContent';

const Drawer = createDrawerNavigator();

function StartScreenContent() {
  return (
    <View className="flex-1">
      {/* Settings Tab */}
      <View className="absolute left-0 top-[70px] z-10">
        <StartSettingsTab />
      </View>
      {/* Top Half - Morgon */}
      <View className="flex-1">
        <Link asChild href="/views/morgon-screen">
          <ImageButton image={require('@/assets/images/morgon.png')} />
        </Link>
      </View>
      {/* Bottom Half - Afton */}
      <View className="flex-1 ml-[-40px]">
        <Link asChild href="/views/afton-screen">
          <ImageButton image={require('@/assets/images/afton.png')} />
        </Link>
      </View>
    </View>
  );
}

const drawerContent = () => <StartDrawerContent />;

export default function StartScreen() {
  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      screenOptions={{
        drawerStyle: {
          width: 235,
        },
      }}
    >
      <Drawer.Screen
        name="StartScreenContent"
        component={StartScreenContent}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
