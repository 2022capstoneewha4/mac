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
    green_long:{
        padding:10,
    },
    square_short:{
        padding:2
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
    green_long:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor:'#064635',
        margin: 10,
        borderRadius:20,
        width:width/1.5,
        height:60,
        padding:15,
    },
    square_short:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F4EEA9',
        width:116,
        height: 24,
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
    green_long:{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F4EEA9',
        fontWeight: 600,
        fontSize: 25,
        lineHeight: 30,
    },
    square_short:{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#064635',
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.15,
    },
});
