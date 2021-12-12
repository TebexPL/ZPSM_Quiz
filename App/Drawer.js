import * as React from 'react';
import {Component} from 'react';

import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text} from 'react-native';

import MainScreen from './Screens/MainScreen';
import TestScreen from './Screens/TestScreen';
import ResultScreen from './Screens/ResultScreen';




function CustomDrawerContent(props) {
  const arrTests = [];
  const arr = []
  for(let i in props.descriptors)
      arrTests.push(props.descriptors[i]);
  arr.push(arrTests.shift());
  arr.push(arrTests.shift());

  return (
    <View style={{ alignItems: 'center', flexDirection:'column'}}>
     <View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>Quiz App</Text>
      </View>
      {arr.map((item, key) =>
          <DrawerItem
            label={item.route.name}
            onPress={() => props.navigation.navigate(item.route.name)}
            focused={item.navigation.isFocused() ? true : false}
            activeBackgroundColor='grey'
            activeTintColor='white'
            style={{width: '90%'}}
            key={key} />
        )}
        <View style={{height: 1, width: '80%', backgroundColor: 'black'}}></View>
        {arrTests.map((item, key) =>
            <DrawerItem
              label={item.route.name}
              onPress={() => props.navigation.navigate(item.route.name)}
              focused={item.navigation.isFocused() ? true : false}
              activeBackgroundColor='grey'
              activeTintColor='white'
              style={{width: '90%'}}
              key={key} />
          )}
      </View>
  );
}





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
            <CustomDrawerContent {...props} />}
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
                test={test} />
              }
            </this.Drawer.Screen>
          )}
        </this.Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default Drawer;
