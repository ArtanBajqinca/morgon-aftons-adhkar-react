import '@/globals.css';
import { View, Text, ScrollView } from 'react-native';
import TopBar from '@/app/components/ui/TopBar';
import AdhkarDrawerContent from '@/app/drawer/AdhkarDrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StatusBarPlaceholder from '@/app/components/ui/StatusBarPlaceholder';
import drawerScreenOptions from '@/app/navigation/drawerOption';
import AdhkarTitleComponent from '@/app/components/ui/AdhkarTitleComponent';
import BottomDivider from '@/app/components/ui/BottomDivider';

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
        <View className="flex-1">
          <View className="h-[10px] bg-beige-550" />

          <View className="flex-col items-left mx-[3vh] mb-[30px]">
            <View className="flex-1 items-center justify-between">
              <View className="my-[30px]">
                <View className="flex items-center justify-center bg-orange-500 rounded-[7px] w-[38px] h-[38px]">
                  <Text className="text-[23px] font-avenir-heavy text-beige-500">
                    1
                  </Text>
                </View>
              </View>
            </View>

            <Text className="text-[20px] font-avenir-heavy text-gray-500 leading-[25px]">
              Allah! Med Din välsignelse träder vi in i dagen, och med Din
              välsignelse träder vi in i kvällen. Med Din välsignelse lever vi
              och dör vi, och till Dig återuppstår vi på Domedagen.
            </Text>

            <Text className="text-[14px] font-noto-sans-semi-bold text-beige-700 pt-[3px]">
              [ Läses fyra gånger ]
            </Text>

            <Text className="text-[20px] font-avenir-heavy text-gray-500 pt-[17px] leading-[25px]">
              Allahumma bika asbahnâ, wa bika amsaynâ, wa bika nahyâ, wa bika
              namût wa ilaykan-nushûr.
            </Text>

            <Text className="text-[14px] font-noto-sans-semi-bold text-beige-700 pt-[3px]">
              [ Läses fyra gånger ]
            </Text>

            <Text className="text-right text-[27px] font-me-quran text-gray-500 pt-[17px] leading-[49px]">
              اللَّهُمَّ بِكَ أصْبَحْنَا، وبِكَ أمْسَيْنَا، وَبِكَ نَحْيَا،
              وَبِكَ نَمُوتُ، وإلَيْكَ النُّشُورُ
            </Text>

            <Text className="text-[20px] text-right font-me-quran text-beige-700">
              [ثلاث مرات]
            </Text>

            <View className="flex-row  items-center mt-[20px]">
              <Text className="flex-1 text-[15px] align-middle font-avenir-roman text-gray-500">
                At-Tirmidhî 5/466 nr 3391
              </Text>

              <View className="flex-row">
                <View className=" bg-beige-600 rounded-[20px] px-4 py-0 pt-[2px]">
                  <Text className="text-[14px] flex-1 font-avenir-black text-beige-500 my-[4px]">
                    LÄS BELÖNING
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <BottomDivider />
        </View>
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
