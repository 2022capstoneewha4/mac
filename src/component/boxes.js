import { StyleSheet,Dimensions } from "react-native";
import { greaterThan } from "react-native-reanimated";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const boxPosStyles=StyleSheet.create({
    green_input:{
        padding:10,
    },
    orange_box:{
        padding:10
    },
    grey_long:{
        padding:10,
    }
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
    yellow_title: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F4EEA9',
        padding: 10,
        width: width/2, 
        height: 48,  
        alignItems:'stretch'
    },
    grey_roomDetail:{
        alignItems: 'center',
        justifyContent: 'center',
        width:319,
        height:186,
        borderRadius:20,
        backgroundColor:'#FAF9F9',
        borderWidth:3,
        borderColor:'#064635',
    },
    orange_box:{
        width: 138,
        height: 29,
        borderRadius:20,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F0BB62',
    },
    yellow_content:{
        alignItems: 'center',
        justifyContent: 'center',
        width:300,
        height:130,
        borderRadius:20,
        backgroundColor:'#F4EEA9',
        padding:20,
    }
});

export const boxTextStyles=StyleSheet.create({
    grey_long:{
        color: '#064635',
    },
    green_input:{
        color: '#519259',
        fontWeight: 'bold',
    },
    yellow_title:{
        color: '#064635',
        width:'100%', 
        fontSize: 20, 
        textAlign:'center', 
        position:'absolute',
        fontWeight: 'bold',
    },
    yellow_content:{
        color:'#000',
        fontSize: 13,
        fontWeight: 400,
    },
    orange_box:{
        color:'#064635',
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18,
    }
});