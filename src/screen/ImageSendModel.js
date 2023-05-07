import { StyleSheet, Text, TextInput, SafeAreaView, Button, View, Image, TouchableOpacity } from 'react-native';
import { boxAreaStyles, boxPosStyles, boxTextStyles } from '../component/boxes';
import { buttonAreaStyles, buttonPosStyles, buttonTextStyles } from '../component/buttons';
import { textStyles } from '../component/styles';
export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <View style={[boxAreaStyles.yellow_title,{width: 191, height: 52, alignItems:'center'}]}>
          <Text style={[boxTextStyles.yellow_title,{fontWeight:500, fontSize: 15}]}>답사지에서 찍은 사진들을{'\n'}
          최소 10장 업로드 해주세요.</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View style={{alignItems:'center', marginTop:59, marginBottom:15, }}>
            <TouchableOpacity
              style={{
                borderWidth:10,
                borderColor:'#F0BB62',
                alignItems:'center',
                width:100,
                height:100,
                backgroundColor:'#F4EEA9',
                borderRadius:50,
              }}
            >
              <Image source={require('../../assets/camera.png')} />
            </TouchableOpacity>
            <View style={[buttonPosStyles.green_long,{padding:5}]}>
                <TouchableOpacity style={[buttonAreaStyles.green_long,{width:110, height:41, alignItems:'center', padding:5}]}
                onPress={() => navigation.navigate("")}>
                  <Text style={[buttonTextStyles.green_long,{fontSize:20, lineHeight:24, padding:0}]}>지금찍기</Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={{alignItems:'center', marginTop:59, marginBottom:15, }}>
            <TouchableOpacity
              style={{
                borderWidth:10,
                borderColor:'#F0BB62',
                alignItems:'center',
                justifyContent:'center',
                width:100,
                height:100,
                backgroundColor:'#F4EEA9',
                borderRadius:50,
              }}
            >
              <Image source={require('../../assets/gallery.png')} />
            </TouchableOpacity>
            <View style={[buttonPosStyles.green_long,{padding:5}]}>
            <TouchableOpacity style={[buttonAreaStyles.green_long,{width:110, height:41, alignItems:'center', padding:0}]}
            onPress={() => navigation.navigate("")}>
              <Text style={[buttonTextStyles.green_long,{fontSize:20, lineHeight:24, padding:0}]}>사진 첨부</Text>
            </TouchableOpacity>
            </View>
          </View>

        </View>
        

          

        
        <View style={[buttonPosStyles.square_short,{alignItems:'center'}]}>
            <TouchableOpacity style={[buttonAreaStyles.square_short,{ backgroundColor: '#519259',width:107, height:31,borderRadius:10, marginTop:20,
            boxShadow: 4 }]} 
            onPress={() => navigation.navigate("FinalModel")}>
              <Text style={[buttonTextStyles.square_short,{color:'#fff'}]}>다음 단계</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}