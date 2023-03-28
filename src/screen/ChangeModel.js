import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>3D 모델 변환</Text>
        <Button title="Bake" />
        <Text>위치 정보 추가</Text>
        <Button title="Add" />
        <Button onPress={() => navigation.navigate("UploadModel")} title="Next" />
      </SafeAreaView>
    );
}