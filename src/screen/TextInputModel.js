import { StyleSheet, Text, TextInput, SafeAreaView, Button, View, Image, TouchableOpacity } from 'react-native';
import { boxAreaStyles, boxPosStyles, boxTextStyles } from '../component/boxes';
import { buttonAreaStyles, buttonPosStyles, buttonTextStyles } from '../component/buttons';
import { textStyles } from '../component/styles';
boxTextStyles
export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={[boxAreaStyles.yellow_title,{width: 247, height: 34, alignItems:'center'}]}>
          <Text style={[boxTextStyles.yellow_title,{fontWeight:500, fontSize: 15}]}>답사지에서 느낀 소감을 적겠습니까?</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={[textStyles.titleText, {fontWeight:400}]}>이름: </Text>
          <View style={boxPosStyles.green_input}>
            <View style={[boxAreaStyles.green_input,{width: 260,flexDirection:'row', 
            justifyContent:'space-between', padding:10}]}>
              <TextInput></TextInput>
              <Image source={require('../../assets/search.png')} />
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={[textStyles.titleText, {fontWeight:400}]}>위치: </Text>
          <View style={boxPosStyles.green_input}>
            <View style={[boxAreaStyles.green_input,{width: 260,flexDirection:'row', 
            justifyContent:'space-between', padding:10}]}>
              <TextInput></TextInput>
              <Image source={require('../../assets/search.png')} />
            </View>
          </View>
        </View>
        <View style={boxPosStyles.green_input}>
          <View style={[boxAreaStyles.green_input,{width: 334, height:297, borderRadius: 20}]}>
            <TextInput style={boxTextStyles.green_input}></TextInput>
          </View>
        </View>

        <View style={[buttonPosStyles.square_short,{alignItems:'center'}]}>
            <TouchableOpacity style={[buttonAreaStyles.square_short,{ backgroundColor: '#519259',width:107, height:31,borderRadius:10, marginTop:20,
            boxShadow: 4 }]} 
            onPress={() => navigation.navigate("ImageSendModel")}>
              <Text style={[buttonTextStyles.square_short,{color:'#fff'}]}>다음 단계</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}