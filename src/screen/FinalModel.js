import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { textStyles } from '../component/styles';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>3D 모델로 변환하는데,</Text>
        <Text style={textStyles.text}>약 1시간 소요</Text>
        <Text>변환후 알림을 보내드릴게요!</Text>
        <Button onPress={() => navigation.navigate("RoomDetail")} title="모델 구경하러 가기" />
      </SafeAreaView>
    );
}