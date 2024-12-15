import { Text, View } from 'react-native';

// testing my eslint and prettier
const unusedVariable: string = 'This is an unused variable';

export default function Index() {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
