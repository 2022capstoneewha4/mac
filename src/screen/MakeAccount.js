import { TextInput, StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput placeholder='+ ID'></TextInput>
        <TextInput placeholder='+ Password'></TextInput>
        <TextInput placeholder='+ Password Check'></TextInput>
        <TextInput placeholder='+ Nickname'></TextInput>
        <Button onPress={() => navigation.navigate("InfoAgree")} title="InfoAgree" />
        <Button onPress={() => navigation.navigate("Login")} title="Done" />
      </SafeAreaView>
    );
}