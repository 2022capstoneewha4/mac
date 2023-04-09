import {StyleSheet} from 'react-native';

export const viewStyles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
});

export const textStyles=StyleSheet.create({
    text:{
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: 'black',
    },
    error:{
        fontWeight: '400',
        color: 'red',
    }
});

export const layoutStyles=StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    header:{
        flex: 1,
        backgroundColor: '#f1c40f',
    },
    contents:{
        flex: 2,
        backgroundColor: '#1abc9c',
    },
    footer:{
        flex: 1,
        backgroundColor: '#3498db',
    },
    text:{
        fontSize: 26,
    },
})