import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import layoutStyles from './styles';

export const Header=()=>{
    return(
        <View style={[layoutStyles.container, layoutStyles.header]}>
            <Text style={layoutStyles.text}>Header</Text>
        </View>
    );
};

export const Contents=()=>{
    return(
        <View style={[layoutStyles.container, layoutStyles.header]}>
            <Text style={layoutStyles.text}>Contents</Text>
        </View>
    );
};

export const Footer=()=>{
    return(
        <View style={[layoutStyles.container, styles.header]}>
            <Text style={layoutStyles.text}>Footer</Text>
        </View>
    );
};