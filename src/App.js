import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import sampleLayout from './screen/sampleLayout';

import Splash from './screen/Splash';
import Authorization from './screen/Authorization';
import Login from './screen/Login';
import MakeAccount from './screen/MakeAccount';
import InfoAgree from './screen/InfoAgree';

import RoomList from './screen/RoomList';
import RoomDetail from './screen/RoomDetail';
import MyModel from './screen/MyModel';

import TakeModel from './screen/TakeModel';
import ExplainModel from './screen/ExplainModel';
import ChangeModel from './screen/ChangeModel';
import UploadModel from './screen/UploadModel';

import Explore from './screen/Explore';
import OtherModel from './screen/OtherModel';

import Settings from './screen/Settings';
import ChangeAccount from './screen/ChangeAccount';
import SetRoom from './screen/SetRoom';
import MakeRoom from './screen/MakeRoom';

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

        <Drawer.Screen name="TakeModel" component={TakeModel} />
        <Drawer.Screen name="ExplainModel" component={ExplainModel} />
        <Drawer.Screen name="ChangeModel" component={ChangeModel} />
        <Drawer.Screen name="UploadModel" component={UploadModel} />

        <Drawer.Screen name="Explore" component={Explore} />
        <Drawer.Screen name="OtherModel" component={OtherModel} />

        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="SetRoom" component={SetRoom} />
        <Drawer.Screen name="ChangeAccount" component={ChangeAccount} />
        <Drawer.Screen name="MakeRoom" component={MakeRoom} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}