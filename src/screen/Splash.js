import { Image, SafeAreaView, View} from 'react-native';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../assets/long_logo.png')} />
        <View style={{flexDirection: 'row', padding: 10}}>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image source={require('../../assets/circle.png')} />
          </View>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image source={require('../../assets/circle.png')} />
          </View>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image source={require('../../assets/circle.png')} />
          </View>

          <View style={{flexDirection: 'row', padding: 20}}>
            <Image source={require('../../assets/circle.png')} />
          </View>
        </View>
      </SafeAreaView>
    );
}