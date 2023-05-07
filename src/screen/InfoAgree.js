import { StyleSheet, Text, SafeAreaView, Button,View,Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {boxAreaStyles,boxTextStyles} from '../component/boxes';
import { buttonPosStyles ,buttonAreaStyles, buttonTextStyles} from '../component/buttons';
import { viewStyles } from '../component/styles';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={[boxAreaStyles.grey_long, {width: 325, height:500, marginLeft:17, position:'absolute'} ]}>
          <ScrollView style={viewStyles.scrollView}>
            <Text style={boxTextStyles.green_input}>개인정보 제공 동의서</Text>
            <Text style={boxTextStyles.grey_long}>본인은 회원 가입을 함에 따라 [개인정보 보호법] 
            제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.{"\n"}{"\n"}
              □ 개인정보의 수집 및 이용에 관한 사항{"\n"}
              - 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호, 전화번호,
              주소, 이메일, 가족관계, 학력사항, 경력사항, 자격사항 등과 그 外 이력서 기재 내용
              일체{"\n"}{"\n"}

              - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류 심사 및 인사서
              류로 활용하며, 목적 외의 용도로는 사용하지 않습니다.{"\n"}{"\n"}

              □ 개인정보의 보관 및 이용 기간{"\n"}
              - 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우
              [개인정보 보호법] 제21조에 따라 처리합니다.{"\n"}{"\n"}

              □ 본인은 개인정보 수집 및 이용에 대하여</Text>
            <View style={buttonPosStyles.checkbox}>
              <Text style={buttonTextStyles.checkbox}>[</Text>
              <TouchableOpacity style={buttonAreaStyles.checkbox} onPress={() => navigation.navigate("MakeAccount")}>
                <Image source={require('../../assets/checkbox.png')} />
              </TouchableOpacity>
              <Text style={buttonTextStyles.checkbox}>동의합니다]</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});
