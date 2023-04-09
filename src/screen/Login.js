import { TextInput, StatusBar, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import {buttonAreaStyles, buttonTextStyles, buttonPosStyles} from '../component/buttons';
import {boxAreaStyles,boxTextStyles,boxPosStyles} from '../component/boxes';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar/>

        <View>
          <Text style={boxTextStyles.grey_long}>Log In</Text>

          <View style={boxAreaStyles.grey_long}>

            <View style={boxPosStyles.green_input}>
              <Text style={boxTextStyles.green_input}>ID</Text>
              <View style={boxAreaStyles.green_input}>
                <TextInput placeholder='+ ID'></TextInput>
              </View>
            </View>
            
            <View style={boxPosStyles.green_input}>
              <Text style={boxTextStyles.green_input}>PW</Text>
              <View style={boxAreaStyles.green_input}>
                <TextInput placeholder='+ Password'></TextInput>
              </View>
            </View>

          </View>

        </View>

        <View style={buttonPosStyles.yellow_short}>
            <TouchableOpacity style={buttonAreaStyles.yellow_short} onPress={() => navigation.navigate("MakeAccount")}>
              <Text style={buttonTextStyles.yellow_short}>Done</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}