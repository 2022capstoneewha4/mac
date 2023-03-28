import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>반가사유상 3D 이미지</Text>
        <Text>녹음</Text>
        <Text>메모</Text>
        <Button onPress={() => navigation.navigate("Explore")} title="goto Explore" />
      </SafeAreaView>
    );
}