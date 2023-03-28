import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate("RoomList")} title="goto RoomList" />
        <Button onPress={() => navigation.navigate("MyModel")} title="반가사유상" />
        <Button onPress={() => navigation.navigate("MyModel")} title="반달돌칼" />
        <Button onPress={() => navigation.navigate("MyModel")} title="주먹도끼" />
        <Button onPress={() => navigation.navigate("TakeModel")} title="Make Model" />
      </SafeAreaView>
    );
}