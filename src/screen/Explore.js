import { StyleSheet, Text, SafeAreaView, Button, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { boxTextStyles, boxAreaStyles, boxPosStyles } from '../component/boxes';
import { textStyles } from '../component/styles';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={[boxAreaStyles.yellow_title,{width:144, alignItems:'center', marginRight:150}]}>
            <Text style={boxTextStyles.yellow_title}>탐색 모드</Text>
        </View>
        <ScrollView>
          <View style={{flexDirection:'row', width:'95%', margin:5}}>
            <View style={{width:153, height:199, backgroundColor:'#FAF9F9', alignItems:'center', margin:5}}>
              <View style={{width: 150, alignItems:'center', padding:2}}>
                <Image source={require('../../assets/statue.png')} />
              </View>
              <View style={[boxAreaStyles.yellow_title, {width:150, height: 27,backgroundColor:'#F4EEA9', alignItems:'center'}]}>
                <Text style={[boxTextStyles.yellow_title]}>반가사유상</Text>
              </View>
              <Text style={boxTextStyles.yellow_content}>자몽치킨 - 개인답사</Text>
              <Text style={boxTextStyles.yellow_content}>2021.10.16</Text>
            </View>
            <View style={{width:150, height:199, backgroundColor:'#FAF9F9', alignItems:'center', margin:5}}>
              <View style={{width: 150, alignItems:'center', padding:2}}>
                <Image source={require('../../assets/statue.png')} />
              </View>
              <View style={[boxAreaStyles.yellow_title, {width:150, height: 27,backgroundColor:'#F4EEA9', alignItems:'center'}]}>
                <Text style={[boxTextStyles.yellow_title]}>고인돌</Text>
              </View>
              <Text style={boxTextStyles.yellow_content}>자몽치킨 - 개인답사</Text>
              <Text style={boxTextStyles.yellow_content}>2021.10.16</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', width:'95%', margin:5}}>
            <View style={{width:153, height:199, backgroundColor:'#FAF9F9', alignItems:'center', margin:5}}>
              <View style={{width: 150, alignItems:'center', padding:2}}>
                <Image source={require('../../assets/statue.png')} />
              </View>
              <View style={[boxAreaStyles.yellow_title, {width:150,height: 27,backgroundColor:'#F4EEA9', alignItems:'center'}]}>
                <Text style={[boxTextStyles.yellow_title]}>반가사유상</Text>
              </View>
              <Text style={boxTextStyles.yellow_content}>자몽치킨 - 개인답사</Text>
              <Text style={boxTextStyles.yellow_content}>2021.10.16</Text>
            </View>
            <View style={{width:153, height:199, backgroundColor:'#FAF9F9', alignItems:'center', margin:5}}>
              <View style={{width: 150, alignItems:'center', padding:2}}>
                <Image source={require('../../assets/statue.png')} />
              </View>
              <View style={[boxAreaStyles.yellow_title, {width:150,height: 27,backgroundColor:'#F4EEA9', alignItems:'center'}]}>
                <Text style={[boxTextStyles.yellow_title]}>고인돌</Text>
              </View>
              <Text style={boxTextStyles.yellow_content}>자몽치킨 - 개인답사</Text>
              <Text style={boxTextStyles.yellow_content}>2021.10.16</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}