import { Text, View } from 'react-native';
import '../globals.css';

// testing my eslint and prettier
const unusedVariable: string = 'This is an unused variable';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-900 text-[19px] font-bold">
        Hello darkness my old friend!
      </Text>
    </View>
  );
}
