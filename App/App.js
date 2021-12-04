import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './Screens/MainScreen';
import TestScreen from './Screens/TestScreen';
import ResultScreen from './Screens/ResultScreen';





const Drawer = createDrawerNavigator();

class App extends Component{

  constructor(){
    super();
    let cards = [];
    for(let i=0; i< 10; i++){
      let card = {};
      card.title = 'Title test #'+i;
      card.tags = ["Tag1", "Tag2", "Tag3"];
      card.text = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth';
      cards.push(card);
    }



    this.state = {
      cards: cards
    }

  }



  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main">
          <Drawer.Screen name="Home Page">
            {() => <MainScreen cards={this.state.cards} />}
          </Drawer.Screen>
          <Drawer.Screen name="Results"  >
            {() => <ResultScreen />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }

}

export default App;
