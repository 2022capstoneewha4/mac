import { StyleSheet, Text, SafeAreaView, Button, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { boxAreaStyles, boxPosStyles, boxTextStyles } from '../component/boxes';
import IconButton from '../component/IconButton';
import { layoutStyles, textStyles } from '../component/styles';
import {images} from '../component/images';
// import { FloatingAction } from "react-native-material/core";

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity 
          onPress = {()=> navigation.navigate("RoomList")}>
            <Image source='../../assets/back_arrow.png' style={{width:20, height:20}}
            resizeMode="contain" />
          </TouchableOpacity>
          <View style={[boxAreaStyles.yellow_title,{width:144, alignItems:'center', marginRight:150}]}>
            <Text style={boxTextStyles.yellow_title}>내 개인 방</Text>
          </View>
       </View>
        <ScrollView>
          <TouchableOpacity style={[boxAreaStyles.grey_long,{width:319, height:186, flexDirection:'row', 
          justifyContent:'flex-start', margin: 20}]}
          onPress={() => navigation.navigate("MyModel")}>
            <View style={{width: 150, alignItems:'center'}}>
              <Image source={require('../../assets/statue.png')} />
            </View>
            <View style={[layoutStyles.verticalLine]}></View>
            <View style={{width: 160, justifyContent:'center', alignItems:'center'}}>
              <Text style={textStyles.titleText}>반가사유상</Text>
              <View style={[boxAreaStyles.orange_box, {width: 138, height: 29, flexDirection:'row', marginTop:16, marginBottom:16}]}>
                <Image style={{width:12, height:12}} source={require('../../assets/headphone.png')} />
              </View>
              <View style={[boxAreaStyles.yellow_content,{width:138, height:29, padding:5}]}>
                <Text style={[boxTextStyles.yellow_content,{fontSize:8, lineHeight:9}]}>금동미륵보살반가사유상은 삼국 시대에 만들어진 
                금동 미륵보살 반가사유상</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[boxAreaStyles.grey_long,{width:319, height:186, flexDirection:'row',
           justifyContent:'flex-start',  margin: 20}]}
           onPress={() => navigation.navigate("MyModel")}>
            <View style={{width: 150, alignItems:'center'}}>
              <Image source={require('../../assets/goindol.png')} />
            </View>
            <View style={[layoutStyles.verticalLine]}></View>
            <View style={{width: 160, justifyContent:'center', alignItems:'center'}}>
              <Text style={textStyles.titleText}>고인돌</Text>
              <View style={[boxAreaStyles.orange_box, {width: 138, height: 29, flexDirection:'row', marginTop:16, marginBottom:16}]}>
                <Image style={{width:12, height:12}} source={require('../../assets/headphone.png')} />
              </View>
              <View style={[boxAreaStyles.yellow_content,{width:138, height:29, padding:5}]}>
                <Text style={[boxTextStyles.yellow_content,{fontSize:8, lineHeight:9}]}>금동미륵보살반가사유상은 삼국 시대에 만들어진 
                금동 미륵보살 반가사유상</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[boxAreaStyles.grey_long,{width:319, height:186, flexDirection:'row',
           justifyContent:'flex-start',  margin: 20}]}
           onPress={() => navigation.navigate("MyModel")}>
            <View style={{width: 150, alignItems:'center'}}>
              <Image source={require('../../assets/halfknife.png')} />
            </View>
            <View style={[layoutStyles.verticalLine]}></View>
            <View style={{width: 160, justifyContent:'center', alignItems:'center'}}>
              <Text style={textStyles.titleText}>반달돌칼</Text>
              <View style={[boxAreaStyles.orange_box, {width: 138, height: 29, flexDirection:'row', marginTop:16, marginBottom:16}]}>
                <Image style={{width:12, height:12}} source={require('../../assets/headphone.png')} />
              </View>
              <View style={[boxAreaStyles.yellow_content,{width:138, height:29, padding:5}]}>
                <Text style={[boxTextStyles.yellow_content,{fontSize:8, lineHeight:9}]}>금동미륵보살반가사유상은 삼국 시대에 만들어진 
                금동 미륵보살 반가사유상</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        {/* <Stack fill center>
         <FAB icon={props => <Icon name="plus" {...props} />} color="primary" />
        </Stack> */}
        {/* <View style={styles.container}>
          <FloatingAction
            actions={actions}
            onPressItem={name => {
              console.log(`selected button: ${name}`);
              navigation.navigate("MakeModel");} 
            }
          />
        </View> */}
          <Button onPress={() => navigation.navigate("TakeModel")} title="Make Model" />
      </SafeAreaView>
    );
}

const actions = {
  text: "Make",
  icon: require('../../assets/plus.png'),
  name: "bt_make_model",
  position: 2
}