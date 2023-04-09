import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate("MakeAccount")} title="Done" />
      </SafeAreaView>
    );
}