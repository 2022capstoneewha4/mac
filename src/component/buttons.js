import { StyleSheet,Dimensions } from "react-native";
import { greaterThan } from "react-native-reanimated";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const buttonPosStyles=StyleSheet.create({
    yellow_long:{
        padding:10,
    },
    yellow_short:{
        padding:10,
    },
    checkbox:{
        padding:10,
        flexDirection: 'row',
    },
});

export const buttonAreaStyles=StyleSheet.create({
    yellow_long:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F4EEA9',
        padding: 20,
        borderRadius:20,
        width:width/2,
    },
    yellow_short:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F4EEA9',
        padding: 20,
        borderRadius:20,
        width:width/4,
    },
    checkbox:{
    },
    longButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width:width-80,
        height:45,
        marginTop:10,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:20,
        backgroundColor:'#06ae7a',
        color:'#000000',
        borderWidth:1,
        borderColor:'transparent',
    },
});

export const buttonTextStyles=StyleSheet.create({
    yellow_long:{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#064635',
    },
    yellow_short:{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#064635',
    },
    checkbox:{
        color: '#064635',
        fontWeight: 'bold',
        padding:5,
    },
    longText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginRight:13,
    },
});
