import { TextInput, View, StyleSheet, Text, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { boxAreaStyles } from '../component/boxes';
import { buttonAreaStyles, buttonPosStyles, buttonTextStyles } from '../component/buttons';
import { textStyles, viewStyles } from '../component/styles';


export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, margin: 34, justifyContent: 'center' }}>
        <View style={{flexDirection:'row'}}>
          <Text style={textStyles.titleText}>방장: </Text>
          <TextInput placeholder='+ 자몽무무'></TextInput>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={textStyles.titleText}>방 소개: </Text>
          <TextInput placeholder='+ 방 소개'></TextInput>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={textStyles.titleText}>방 멤버 리스트 </Text>
          <View style={buttonPosStyles.yellow_short}>
              <TouchableOpacity style={[buttonAreaStyles.yellow_short]} onPress={() => navigation.navigate("MakeRoom")}>
                <Text style={buttonTextStyles.yellow_short}>추가하기</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={[boxAreaStyles.grey_long, {width: 325, height:417, alignItems:'flex-start', justifyContent:'flex-start'} ]}>
        <ScrollView style={viewStyles.scrollView}>
          <View style={{margin:5}}>
            <Text style={{fontSize:10, fontWeight:600}}>2022.09.17부터 참여</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <View style={buttonAreaStyles.square_short}>
                <Text style={buttonTextStyles.square_short}>자몽무무</Text> 
              </View>
              <View style={[buttonAreaStyles.square_short,{backgroundColor:'#E1B45F', width:79}]}>
                <Text style={buttonTextStyles.square_short}>일반 멤버</Text> 
              </View>
              <View style={[buttonAreaStyles.square_short,{width:79}]}>
                <Text style={buttonTextStyles.square_short}>내보내기</Text> 
              </View>
            </View>
          </View>

          <View style={{margin:5}}>
            <Text style={{fontSize:10, fontWeight:600}}>2022.09.17부터 참여</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <View style={buttonAreaStyles.square_short}>
                <Text style={buttonTextStyles.square_short}>자몽무무</Text> 
              </View>
              <View style={[buttonAreaStyles.square_short,{backgroundColor:'#E1B45F', width:79}]}>
                <Text style={buttonTextStyles.square_short}>일반 멤버</Text> 
              </View>
              <View style={[buttonAreaStyles.square_short,{width:79}]}>
                <Text style={buttonTextStyles.square_short}>내보내기</Text> 
              </View>
            </View>
          </View>
          
        </ScrollView>
        </View>

        <View style={[buttonPosStyles.square_short,{alignItems:'center'}]}>
            <TouchableOpacity style={[buttonAreaStyles.square_short,{ backgroundColor: '#519259',width:107, height:31,borderRadius:10, marginTop:20,
            boxShadow: 4 }]} 
            onPress={() => navigation.navigate("SetRoom")}>
              <Text style={[buttonTextStyles.square_short,{color:'#fff'}]}>완료하기</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}


        // <Text>멤버 검색</Text>
        // <View style={{flexDirection: 'row'}}>
        //   <TextInput placeholder='+ 초대할 멤버 아이디를 입력하세요'></TextInput>
        //   <Button title="search" />
        // </View>

        // <Text>멤버 검색 결과</Text>
        // <View style={{flexDirection: 'row'}}>
        //   <Text>고승희</Text>
        //   <Button title="초대" />
        // </View>
