import { Image, Pressable, Modal, TextInput, View, StyleSheet, Text, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { boxAreaStyles,boxPosStyles,boxTextStyles } from '../component/boxes';
import { buttonAreaStyles, buttonPosStyles, buttonTextStyles } from '../component/buttons';
import { textStyles, viewStyles } from '../component/styles';
import React, {useState} from 'react';

export default function Screen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <SafeAreaView style={{ flex: 1, margin: 34, justifyContent: 'center' }}>
        <View style={buttonPosStyles.yellow_short}>
              <TouchableOpacity style={[buttonAreaStyles.yellow_short,{backgroundColor:'#064635', width:140}]} onPress={() => navigation.navigate("MakeRoom")}>
                <Text style={[buttonTextStyles.yellow_short,{color:'#F4EEA9'}]}>민맥 동아리 방</Text>
              </TouchableOpacity>
          </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
            <Text style={textStyles.titleText}>방장: </Text>
            <Text style={[textStyles.titleText,{color:'#064635'}]}>자몽무무</Text>
            </View>
            <View style={buttonPosStyles.yellow_short}>
                <TouchableOpacity style={[buttonAreaStyles.yellow_short,{width:120}]} onPress={() => navigation.navigate("MakeRoom")}>
                    <Text style={[buttonTextStyles.yellow_short]}>방장 바꾸기</Text>
                </TouchableOpacity>
            </View>
        </View>
          <Text style={textStyles.titleText}>방 소개:</Text>
          <Text style={[textStyles.grey_long, {fontSize:20}]}>이화여자대학교 중앙동아리 소속 {'\n'}근현대사 연구회 민맥</Text>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
          <Text style={[textStyles.titleText,{marginTop:20}]}>방 멤버 리스트 </Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View> 
                {/* //모달창에서 보여줄 화면 꾸미기 */}
                <View style={buttonAreaStyles.square_short}>
                    <Text style={buttonTextStyles.square_short}>닉네임 검색하기</Text> 
                </View>
                <View style={boxPosStyles.green_input}>
                    <View style={[boxAreaStyles.green_input,{width:274, height:60, flexDirection:'row', justifyContent:'flex-start', padding:5}]}>
                        <Image source={require('../../assets/search.png')} />
                        <TextInput placeholder='자몽'></TextInput>
                    </View>
                    <View style={[boxAreaStyles.green_input, {width: 274, height:278, borderRadius: 0, 
                        alignItems:'flex-start', justifyContent:'flex-start', marginTop:8} ]}>
                        <ScrollView style={viewStyles.scrollView}>
                            <View style={{flexDirection:'row', justifyContent:'space-evenly', padding:3}}>
                    
                                <View style={[buttonAreaStyles.square_short,{width:116 ,marginTop:23, marginBottom:23}]}>
                                    <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}>  
                                    {/* 모달창 닫기 */}
                                        <Text style={buttonTextStyles.square_short}>자몽무무</Text> 
                                    </TouchableOpacity>
                                </View>
                                <View style={[buttonAreaStyles.square_short,{width:116, marginTop:23, marginBottom:23}]}>
                                    <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}>  
                                        <Text style={buttonTextStyles.square_short}>자몽치킨</Text>
                                    </TouchableOpacity> 
                                </View>
                            </View>
                        </ScrollView>
                    </View> 
                </View>

            
            </View>
            </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>추가하기</Text>
        </Pressable>
          {/* <View style={[buttonPosStyles.yellow_short]}>
              <TouchableOpacity style={[buttonAreaStyles.yellow_short]} onPress={() => this.setState({open: true})}>
                <Text style={buttonTextStyles.yellow_short}>추가하기</Text>
              </TouchableOpacity>
          </View> */}
        </View>

        <View style={[boxAreaStyles.grey_long, {width: 325, height:200, alignItems:'flex-start', justifyContent:'flex-start'} ]}>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F4EEA9',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#064635',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
