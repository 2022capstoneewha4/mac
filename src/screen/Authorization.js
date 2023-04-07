import { TouchableOpacity, StatusBar, Text, SafeAreaView, View } from 'react-native';
import {buttonAreaStyles, buttonTextStyles, buttonPosStyles} from '../component/buttons';
import {boxAreaStyles,boxTextStyles} from '../component/boxes';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <StatusBar/>

        <Text style={boxTextStyles.grey_long}>Authorization</Text>

        <View style={boxAreaStyles.grey_long}>

          <View style={buttonPosStyles.yellow_long}>
            <TouchableOpacity style={buttonAreaStyles.yellow_long} onPress={() => navigation.navigate("Login")}>
              <Text style={buttonTextStyles.yellow_long}>Log In</Text>
            </TouchableOpacity>
          </View>
          
          <View style={buttonPosStyles.yellow_long}>
            <TouchableOpacity style={buttonAreaStyles.yellow_long} onPress={() => navigation.navigate("MakeAccount")}>
              <Text style={buttonTextStyles.yellow_long}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
    );
}