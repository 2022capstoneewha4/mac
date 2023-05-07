import { StyleSheet, Text, SafeAreaView, Button,View, TextInput, TouchableOpacity } from 'react-native';
import { boxAreaStyles, boxPosStyles, boxTextStyles } from '../component/boxes';
import { buttonTextStyles,buttonAreaStyles,buttonPosStyles } from '../component/buttons';
import IconButton from '../component/IconButton';
import { images } from '../component/images';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={[boxAreaStyles.grey_long, {flex: 9, width: 325, height:500, marginLeft:17} ]}>
          <View style={[buttonPosStyles.yellow_short,{right:75}]}>
              <TouchableOpacity style={[buttonAreaStyles.yellow_short, {backgroundColor:'#F0BB62'}]} >
                <Text style={buttonTextStyles.yellow_short}>자몽무무</Text>
              </TouchableOpacity>
          </View>

          <View style={boxPosStyles.green_input}>
            <Text style={boxTextStyles.green_input}>ID</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[boxAreaStyles.green_input]}>
                <TextInput placeholder='+ ID'></TextInput>
              </View>
              <IconButton type={images.modify} />
            </View>
          </View>

          <View style={boxPosStyles.green_input}>
            <Text style={boxTextStyles.green_input}>PW</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={boxAreaStyles.green_input}>
                <TextInput placeholder='+ Password'></TextInput>
              </View>
              <IconButton type={images.modify} />
            </View>
          </View>

          <View style={[boxPosStyles.green_input,{right:29}]}>
            <Text style={boxTextStyles.green_input}>PW check</Text>
            <View style={boxAreaStyles.green_input}>
              <TextInput placeholder='+ Password again'></TextInput>
            </View>
          </View>

          <View style={boxPosStyles.green_input}>
            <Text style={boxTextStyles.green_input}>E-mail Add</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={boxAreaStyles.green_input}>
                <TextInput placeholder='+ Email'></TextInput>
              </View>
              <IconButton type={images.modify} />
            </View>
          </View>

          <View style={buttonPosStyles.green_long}>
            <TouchableOpacity style={[buttonAreaStyles.green_long,{width: 211, height:60, padding:5}]} onPress={() => navigation.navigate("SetRoom")}>
              <Text style={[buttonTextStyles.green_long, {alignSelf:'center'}]}>내 방 관리하기</Text>
            </TouchableOpacity>
          </View>
        
        </View>
      <View style={{flex: 1.5, flexDirection: 'row'}}>
        <View style={buttonPosStyles.yellow_short}>
            <TouchableOpacity style={[buttonAreaStyles.yellow_short,{width:120}]} onPress={() => navigation.navigate("Authorization")}>
              <Text style={buttonTextStyles.yellow_short}>Log Out</Text>
            </TouchableOpacity>
        </View>

        <View style={buttonPosStyles.yellow_short}>
            <TouchableOpacity style={[buttonAreaStyles.yellow_short,{width:120}]} onPress={() => navigation.navigate("ChangeAccount")}>
              <Text style={buttonTextStyles.yellow_short}>Withdrawal</Text>
            </TouchableOpacity>
        </View>
      </View>
  
      </SafeAreaView>
    );
}