import { TextInput, StatusBar, StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar/>
        <TextInput placeholder='+ ID'></TextInput>
        <TextInput placeholder='+ Password'></TextInput>
        <Button onPress={() => navigation.navigate("RoomList")} title="Done" />
      </SafeAreaView>
    );
}