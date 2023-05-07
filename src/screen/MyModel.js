import { StyleSheet, Text, SafeAreaView, Button, View, TouchableOpacity, Image } from 'react-native';
import { boxAreaStyles, boxPosStyles, boxTextStyles } from '../component/boxes';
import { buttonAreaStyles, buttonPosStyles, buttonTextStyles } from '../component/buttons';
import { textStyles } from '../component/styles';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={[buttonPosStyles.square_short,{right:75}]}>
              <TouchableOpacity style={[buttonAreaStyles.square_short,{width:191}]} >
                <Text style={buttonTextStyles.square_short}>서울특별시 국립중앙박물관</Text>
              </TouchableOpacity>
        </View>
        <View style={[boxPosStyles.orange_box,{left:100}]}>
              <TouchableOpacity style={[boxAreaStyles.orange_box, {width:76, height:34, borderRadius:10}]} >
                <Text style={boxTextStyles.orange_box}>자몽무무</Text>
              </TouchableOpacity>
        </View>
        <View style={{ marginBottom:33}}>
         <Image source={require('../../assets/statue.png')} />
        </View>
        <Text style={textStyles.titleText}>반가사유상</Text>
        
        <View style={[boxAreaStyles.orange_box, {backgroundColor:'#F0BB62', 
        width: '80%', height: 53, flexDirection:'row', marginTop:33, marginBottom:16}]}>
          <Image source={require('../../assets/headphone.png')} />
        </View>
        <View style={[boxAreaStyles.yellow_content]}>
          <Text style={boxTextStyles.yellow_content}>금동미륵보살반가사유상은 삼국 시대에 만들어진 
          금동 미륵보살 반가사유상이다. 일제 때 밀반출되어 출토지가 불분명하여 그 제작지를 정확히 알 수 없으나 
          국보 제78호 금동미륵보살반가사유상과 함께 삼국 시대 불상 중에서 대표적인 예로서 조형적으로 매우 우수한 작품이다.</Text>
        </View>


        
        <Button onPress={() => navigation.navigate("RoomDetail")} title="goto RoomDetail" />
        
        
      </SafeAreaView>
    );
}