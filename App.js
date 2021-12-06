import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './App/Screens/MainScreen';
import TestScreen from './App/Screens/TestScreen';
import ResultScreen from './App/Screens/ResultScreen';

import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);




const Drawer = createDrawerNavigator();

class App extends Component{

  constructor(){
    super();

  }



  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home Page">
          <Drawer.Screen name="Home Page">
            {({navigation}) => <MainScreen navigation={navigation} drawer={Drawer}/>}
          </Drawer.Screen>
          <Drawer.Screen name="Results"  >
            {({navigation}) => <ResultScreen navigation={navigation} />}
          </Drawer.Screen>



        </Drawer.Navigator>
      </NavigationContainer>
    )
  }

}

export default App;
