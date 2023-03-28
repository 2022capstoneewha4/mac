import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>모델 생성이 완료되었습니다</Text>
        <Button onPress={() => navigation.navigate("MyModel")} title="Finish" />
      </SafeAreaView>
    );
}