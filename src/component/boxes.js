import { StyleSheet,Dimensions } from "react-native";
import { greaterThan } from "react-native-reanimated";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const boxPosStyles=StyleSheet.create({
    green_input:{
        padding:10,
    },
});

export const boxAreaStyles=StyleSheet.create({
    grey_long:{
        alignItems: 'center',
        justifyContent: 'center',
        width:width/1.5,
        height:height/1.7,
        borderRadius:20,
        backgroundColor:'#FAF9F9',
        borderWidth:5,
        borderColor:'#064635',
    },
    green_input:{
        alignItems: 'center',
        justifyContent: 'center',
        width:width/2,
        height:45,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#519259',
        borderWidth:4,
    },
});

export const boxTextStyles=StyleSheet.create({
    grey_long:{
        color: '#064635',
    },
    green_input:{
        color: '#519259',
        fontWeight: 'bold',
    },
});