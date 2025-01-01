import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import ImageButton from '@/app/components/ui/ImageButton';
import StartSettingsTab from '@/app/components/ui/StartSettingsTab';
import StartDrawerContent from '@/app/drawer/StartDrawerContent';

const StartDrawer = createDrawerNavigator();

function StartScreenContent() {
  return (
    <View className="flex-1 z-10">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      {/* Settings Tab */}
      <SafeAreaView className="absolute mt-[8vh] z-10">
        <TouchableOpacity>
          <StartSettingsTab />
        </TouchableOpacity>
      </SafeAreaView>

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
    <StartDrawer.Navigator
      drawerContent={drawerContent}
      screenOptions={{
        drawerStyle: {
          width: 235,
        },
        drawerType: 'front',
      }}
    >
      <StartDrawer.Screen
        name="StartScreenContent"
        component={StartScreenContent}
        options={{ headerShown: false }}
      />
    </StartDrawer.Navigator>
  );
}
