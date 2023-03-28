import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>영상</Text>
        <Button title="Upload" />
        <Button onPress={() => navigation.navigate("ExplainModel")} title="Next" />
      </SafeAreaView>
    );
}