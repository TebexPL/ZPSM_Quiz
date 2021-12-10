import * as React from 'react';
import {Component} from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './Screens/MainScreen';
import TestScreen from './Screens/TestScreen';
import ResultScreen from './Screens/ResultScreen';

class Drawer extends Component {

  getTests = async () => {
    this.setState({tests: [], loading:true});
    try{
      const tests = await (await fetch('http://tgryl.pl/quiz/tests')).json();
      for(test of tests){
        const details = await (await fetch('http://tgryl.pl/quiz/test/'+test.id)).json();
        test.details = details;
      }
      this.setState({tests: tests, loading: false});
    }
    catch(error){
      console.error(error);
    }
  }

  constructor(props){
    super(props);
    this.state = {
      tests: [],
      loading: true
    }
  }
  componentDidMount(){
    this.getTests();
  }

  Drawer = createDrawerNavigator();

  render(){
    return (

      <NavigationContainer>
        <this.Drawer.Navigator initialRouteName="Home Page">
          <this.Drawer.Screen name="Home Page">
            {({navigation}) => <MainScreen navigation={navigation}/>}
          </this.Drawer.Screen>
          <this.Drawer.Screen name="Results"  >
            {({navigation}) => <ResultScreen navigation={navigation} />}
          </this.Drawer.Screen>
          {this.state.tests.map((test, key) =>
            <this.Drawer.Screen name={test.name}  key={key} >
              {({navigation}) => <TestScreen navigation={navigation} test={test} />}
            </this.Drawer.Screen>
          )}
        </this.Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default Drawer;
