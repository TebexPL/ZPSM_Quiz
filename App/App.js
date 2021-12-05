import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './Screens/MainScreen';
import TestScreen from './Screens/TestScreen';
import ResultScreen from './Screens/ResultScreen';

import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);




const Drawer = createDrawerNavigator();

class App extends Component{

  getTests = async () => {
    try{
      const response = await fetch('http://tgryl.pl/quiz/tests');
      const tests = await response.json();
      for(test of tests){
        const response = await fetch('http://tgryl.pl/quiz/test/'+test.id);
        const details = await response.json();
        test.details = details;
      }
      this.setState({tests: tests, loading: false});
    }
    catch(error){
      console.error(error);
    }



  }

  constructor(){
    super();
    this.state = {
      tests: [],
      loading: true
    }
    this.getTests();

  }



  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Results">
          <Drawer.Screen name="Home Page">
            {({navigation}) => <MainScreen navigation={navigation} tests={this.state.tests} loading={this.state.loading} />}
          </Drawer.Screen>
          <Drawer.Screen name="Results"  >
            {({navigation}) => <ResultScreen navigation={navigation} />}
          </Drawer.Screen>
          {this.state.tests.map((test, key) =>
            <Drawer.Screen name={test.name} key={key} >
              {({navigation}) => <TestScreen navigation={navigation} test={test} key={key} />}
            </Drawer.Screen>


          )}


        </Drawer.Navigator>
      </NavigationContainer>
    )
  }

}

export default App;
