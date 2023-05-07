import { Image, SafeAreaView, View} from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../assets/new_long_logo.png')} />
        <View style={{flexDirection: 'row', padding: 10}}>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image style={{ tintColor:"#064635"}} source={require('../../assets/circle.png')}  />
          </View>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image style={{ tintColor:"#519259"}} source={require('../../assets/circle.png')} />
          </View>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image style={{ tintColor:"#F0BB62"}} source={require('../../assets/circle.png')} />
          </View>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image style={{ tintColor:"#F4EEA9"}} source={require('../../assets/circle.png')} />
          </View>
        </View>
      </SafeAreaView>
    );
}