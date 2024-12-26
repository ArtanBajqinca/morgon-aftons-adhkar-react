import React from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useCheckboxStates from '@/app/hooks/useCheckboxStates';
import CheckboxOption from '@/app/components/ui/CheckboxOption';

export default function AdhkarDrawerContent() {
  const { checkboxStates, toggleCheckbox, checkboxOptions } =
    useCheckboxStates();

  return (
    <View className="flex-1 bg-beige-800">
      <Image
        source={require('@/assets/images/background-overlay.png')}
        className="absolute w-full h-full opacity-60"
      />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <View>
            <View className="items-center py-[60px]">
              <Image
                source={require('@/assets/images/logo.png')}
                className="h-[100px]"
                resizeMode="contain"
              />
            </View>

            <View className="items-center px-[30px]">
              <Text className="text-beige-800 font-avenir-heavy text-center text-[19px] w-full bg-beige-500">
                Text inställning
              </Text>

              <View className="mt-9 w-full gap-y-4">
                {checkboxOptions.map((option) => (
                  <CheckboxOption
                    key={option.key}
                    label={option.label}
                    isChecked={checkboxStates[option.key]}
                    onToggle={() => toggleCheckbox(option.key)}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
