import { TouchableOpacity, Button, Text, SafeAreaView, View, Image } from 'react-native';
import {buttonAreaStyles, buttonTextStyles, buttonPosStyles} from '../component/buttons';
import { boxTextStyles,boxAreaStyles } from '../component/boxes';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={[buttonPosStyles.yellow_short,{right:100}]}>
          <TouchableOpacity style={[buttonAreaStyles.yellow_short, {backgroundColor:'#F0BB62'}]} >
            <Text style={buttonTextStyles.yellow_short}>자몽무무</Text>
          </TouchableOpacity>
        </View> 

        <View style={[boxAreaStyles.grey_long, {width: 325, height:417, marginLeft:17} ]}>
          <View style={buttonPosStyles.green_long}>
              <TouchableOpacity style={buttonAreaStyles.green_long} onPress={() => navigation.navigate("RoomDetail")}>
                <Text style={buttonTextStyles.green_long}>내 개인방</Text>
              </TouchableOpacity>
          </View>
          <View style={[buttonPosStyles.green_long, {flexDirection:'row'}]}>
              <TouchableOpacity style={[buttonAreaStyles.green_long,{flexDirection:'row', justifyContent:'space-between'}]} onPress={() => navigation.navigate("RoomDetail")}>
                <Text style={buttonTextStyles.green_long}>민맥 동방</Text>
                <Image source={require('../../assets/personal.png')} />
              </TouchableOpacity>
          </View>
          <View style={buttonPosStyles.green_long}>
              <TouchableOpacity style={[buttonAreaStyles.green_long,{flexDirection:'row', justifyContent:'space-between'}]} onPress={() => navigation.navigate("RoomDetail")}>
                <Text style={buttonTextStyles.green_long}>역사교육과 방</Text>
                <Image source={require('../../assets/personal.png')} />
              </TouchableOpacity>
          </View>


        </View>
        <View style={buttonPosStyles.yellow_short}>
            <TouchableOpacity style={[buttonAreaStyles.yellow_short,{width:120}]} onPress={() => navigation.navigate("MakeRoom")}>
              <Text style={buttonTextStyles.yellow_short}>새 방 만들기</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}
