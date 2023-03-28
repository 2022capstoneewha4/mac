import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate("RoomList")} title="goto RoomList" />
        <Button onPress={() => navigation.navigate("Authorization")} title="Log Out" />
        <Button onPress={() => navigation.navigate("ChangeAccount")} title="goto ChangeAccount" />

        <Button onPress={() => navigation.navigate("SetRoom")} title="goto SetRoom" />
      </SafeAreaView>
    );
}