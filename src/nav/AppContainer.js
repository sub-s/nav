// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainIndex from '../pages/main/index';
import ChatIndex from '../pages/chat/index';
import ChatRoom from '../pages/chat/room';
import HashTag from '../pages/chat/hashtag';
import GameStar from '../pages/chat/gamestar';
import Setting from '../pages/chat/setting';
import MyPageIndex from '../pages/mypage/index';


const Tab = createBottomTabNavigator();
const TebApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatItem" component={ChatIndex}/>
      <Tab.Screen name="Room" component={ChatRoom}/>
      <Tab.Screen name="HashTag" component={HashTag}/>
      <Tab.Screen name="GameStar" component={GameStar}/>
      <Tab.Screen name="Setting" component={Setting}/>
    </Tab.Navigator>
  );
};


const MainStackNav = createStackNavigator();
const MainStack = () => {
  return (
    <MainStackNav.Navigator>
      <MainStackNav.Screen name="Details" component={TebApp}/>
      <MainStackNav.Screen name="ChatDetails" component={HashTag}/>
    </MainStackNav.Navigator>
  );
};


const CoverStackNav = createStackNavigator();
function AppContainer() {
  return (
    <NavigationContainer>
      <CoverStackNav.Navigator mode="modal" screenOptions={{headerShown:false}}>
        <CoverStackNav.Screen name="Login" component={MainIndex}/>
        <CoverStackNav.Screen name="Main" component={MainStack}/>
        <CoverStackNav.Screen name="MyPageIndex" component={MyPageIndex}/>
      </CoverStackNav.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
