import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>녹음</Text>
        <Text>메모</Text>
        <Button title="Upload" />
        <Button onPress={() => navigation.navigate("ChangeModel")} title="Next" />
      </SafeAreaView>
    );
}