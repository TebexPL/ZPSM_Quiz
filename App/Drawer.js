import * as React from 'react';
import {Component} from 'react';

import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import MainScreen from './Screens/MainScreen';
import TestScreen from './Screens/TestScreen';
import ResultScreen from './Screens/ResultScreen';
import DrawerContent from './DrawerContent';





class Drawer extends Component {



  getTests = async () => {
      this.setState({tests: [], loading:true});
    try{
      const tests = await (await fetch('http://tgryl.pl/quiz/tests')).json();
      for(let test of tests){
        const details = await (await fetch('http://tgryl.pl/quiz/test/'+test.id)).json();
        test.details = details;
      }
      this.setState({tests: tests, loading:false});
    }
    catch(error){
      console.error(error);
    }
  }

  constructor(props){
    super(props);
    this.state = {
      tests: [],
      loading: false
    }
  }

  Drawer = createDrawerNavigator();

  render(){
    return (

      <NavigationContainer>
        <this.Drawer.Navigator
          drawerContent={props =>
            <DrawerContent {...props} dividerAfter={2} nick={this.props.nick}/>}
          initialRouteName="Home Page">
          <this.Drawer.Screen name="Home Page" style={{backgroundColor: 'red'}}>
            {({navigation}) =>
              <MainScreen
                navigation={navigation}
                tests={this.state.tests}
                loading={this.state.loading}
                refreshCallback={this.getTests}/>
            }
          </this.Drawer.Screen>
          <this.Drawer.Screen name="Results"  >
            {({navigation}) =>
              <ResultScreen navigation={navigation} />
            }
          </this.Drawer.Screen>
          {this.state.tests.map((test, key) =>
            <this.Drawer.Screen name={test.name}  key={key} >
              {({navigation}) =>
              <TestScreen
                navigation={navigation}
                test={test} nick={this.props.nick} />
              }
            </this.Drawer.Screen>
          )}
        </this.Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default Drawer;
