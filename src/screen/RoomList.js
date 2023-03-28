import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate("RoomDetail")} title="내 방" />
        <Button onPress={() => navigation.navigate("RoomDetail")} title="민맥 동방" />
        <Button onPress={() => navigation.navigate("RoomDetail")} title="역사교육과 과방" />
        <Button onPress={() => navigation.navigate("Explore")} title="goto Explore" />
        <Button onPress={() => navigation.navigate("Settings")} title="goto Settings" />
      </SafeAreaView>
    );
}