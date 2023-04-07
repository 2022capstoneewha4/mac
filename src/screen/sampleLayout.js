import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {viewStyles, textStyles} from '../component/styles';
import {Header, Contents, Footer} from '../component/Layout';

export default function Screen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar/>
        <Header/>
        <Contents/>
        <Footer/>
      </SafeAreaView>
    );
}

