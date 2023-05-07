import { TouchableOpacity, Button, Text, SafeAreaView, View, Image } from 'react-native';
import {buttonAreaStyles, buttonTextStyles, buttonPosStyles} from '../component/buttons';
import { boxTextStyles,boxAreaStyles } from '../component/boxes';


//const Stack = createNativeStackNavigator (); // 상단부 네비게이터를 위한 객체 선언

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center'}}>
        <View style={[boxAreaStyles.yellow_title,{width:'100%'}]}>
          <Text style={boxTextStyles.yellow_title}>내가 가입되어 있는 방</Text>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
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
          <Button onPress={() => navigation.navigate("Explore")} title="goto Explore" />
          <Button onPress={() => navigation.navigate("Settings")} title="goto Settings" />
          
        </View>
        
      </SafeAreaView>
    );
}