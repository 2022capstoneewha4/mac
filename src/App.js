import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './screen/Splash';
import Authorization from './screen/Authorization';
import Login from './screen/Login';
import MakeAccount from './screen/MakeAccount';
import InfoAgree from './screen/InfoAgree';

import RoomList from './screen/RoomList';
import RoomDetail from './screen/RoomDetail';
import MyModel from './screen/MyModel';

import VoiceRecordModel from './screen/VoiceRecordModel';
import TextInputModel from './screen/TextInputModel';
import FinalModel from './screen/FinalModel';
import ImageSendModel from './screen/ImageSendModel';

import Explore from './screen/Explore';
import OtherModel from './screen/OtherModel';

import Settings from './screen/Settings';
import ChangeAccount from './screen/ChangeAccount';
import SetRoom from './screen/SetRoom';
import MakeRoom from './screen/MakeRoom';
import ModifyRoom from './screen/ModifyRoom';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Authorization">

        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Authorization" component={Authorization} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="MakeAccount" component={MakeAccount} />
        <Drawer.Screen name="InfoAgree" component={InfoAgree} />

        <Drawer.Screen name="RoomList" component={RoomList} />
        <Drawer.Screen name="RoomDetail" component={RoomDetail} />
        <Drawer.Screen name="MyModel" component={MyModel} />

        <Drawer.Screen name="VoiceRecordModel" component={VoiceRecordModel} />
        <Drawer.Screen name="TextInputModel" component={TextInputModel} />
        <Drawer.Screen name="ImageSendModel" component={ImageSendModel} />
        <Drawer.Screen name="FinalModel" component={FinalModel} />

        <Drawer.Screen name="Explore" component={Explore} />
        <Drawer.Screen name="OtherModel" component={OtherModel} />

        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="SetRoom" component={SetRoom} />
        <Drawer.Screen name="ChangeAccount" component={ChangeAccount} />
        <Drawer.Screen name="MakeRoom" component={MakeRoom} />
        <Drawer.Screen name="ModifyRoom" component={ModifyRoom} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}