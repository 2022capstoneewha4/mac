import { TextInput, StatusBar, StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar/>
        <Button onPress={() => navigation.navigate("Login")} title="Log In" />
        <Button onPress={() => navigation.navigate("MakeAccount")} title="Make Account" />
      </SafeAreaView>
    );
}