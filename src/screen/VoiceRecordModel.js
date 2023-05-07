import {Text, SafeAreaView, Button, View, TouchableOpacity, Image } from 'react-native';
import { boxAreaStyles, boxPosStyles, boxTextStyles } from '../component/boxes';
import { buttonAreaStyles, buttonPosStyles, buttonTextStyles } from '../component/buttons';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={[boxAreaStyles.yellow_title,{width: 261, height: 34, alignItems:'center'}]}>
          <Text style={[boxTextStyles.yellow_title,{fontWeight:500, fontSize: 15}]}>
            현장 도슨트 음성을 녹음하시겠습니까?</Text>
        </View>
        <View style={{alignItems:'center', marginTop:62, marginBottom:53}}>
            <TouchableOpacity
              style={{
                borderWidth:10,
                borderColor:'#F0BB62',
                alignItems:'center',
                justifyContent:'center',
                width:165,
                height:165,
                backgroundColor:'#F4EEA9',
                borderRadius:100,
              }}
            >
              <Image source={require('../../assets/mike.png')} />
            </TouchableOpacity>
        </View>
        <View style={[buttonPosStyles.green_long,{padding:5}]}>
                <TouchableOpacity style={[buttonAreaStyles.green_long,{width:141, height:52, alignItems:'center', padding:5}]}
                onPress={() => navigation.navigate("")}>
                  <Text style={[buttonTextStyles.green_long,{padding:0}]}>녹음 시작</Text>
                </TouchableOpacity>
        </View>
        <View style={[boxAreaStyles.green_input,{flexDirection: 'row', height:74, width:284}]}>
          <TouchableOpacity
                style={{
                  borderWidth:5,
                  borderColor:'#F0BB62',
                  alignItems:'center',
                  justifyContent:'center',
                  width:50,
                  height:50,
                  backgroundColor:'#F4EEA9',
                  borderRadius:50,
                }}
              >
                <Image source={require('../../assets/headphone.png')} />
          </TouchableOpacity>
          <View style={[buttonPosStyles.green_long,{padding:5}]}>
                <TouchableOpacity style={[buttonAreaStyles.green_long,{width:131, height:33, alignItems:'center', padding:0}]}
                onPress={() => navigation.navigate("")}>
                  <Text style={[buttonTextStyles.green_long,{padding:0, fontSize:16}]}>녹음 파일 업로드</Text>
                </TouchableOpacity>
          </View>
        </View>
        <View style={[buttonPosStyles.square_short,{alignItems:'center'}]}>
            <TouchableOpacity style={[buttonAreaStyles.square_short,{ backgroundColor: '#519259',width:107, height:31,borderRadius:10, marginTop:20,
            boxShadow: 4 }]} 
            onPress={() => navigation.navigate("TextInputModel")}>
              <Text style={[buttonTextStyles.square_short,{color:'#fff'}]}>다음 단계</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}