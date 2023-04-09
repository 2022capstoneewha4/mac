import { TextInput, View, StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput placeholder='+ 방 이름'></TextInput>
        <TextInput placeholder='+ 방 소개'></TextInput>

        <Text>멤버 검색</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput placeholder='+ 초대할 멤버 아이디를 입력하세요'></TextInput>
          <Button title="search" />
        </View>

        <Text>멤버 검색 결과</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>고승희</Text>
          <Button title="초대" />
        </View>

        <Button onPress={() => navigation.navigate("SetRoom")} title="방 생성"/>

      </SafeAreaView>
    );
}