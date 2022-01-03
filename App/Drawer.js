import * as React from 'react';
import {Component} from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true);

import NetInfo from "@react-native-community/netinfo";

import MainScreen from './Screens/MainScreen';
import TestScreen from './Screens/TestScreen';
import ResultScreen from './Screens/ResultScreen';
import DrawerContent from './DrawerContent';

const _ = require('lodash');

class Drawer extends Component {

  getTests = async () => {
    this.setState({tests: [], loading:true});
    let db;
    try{
      let db = await SQLite.openDatabase('tests.db');
      await db.executeSql(`CREATE TABLE IF NOT EXISTS 'tests' (
            'id'	TEXT NOT NULL,
          	'test'	TEXT NOT NULL,
          	PRIMARY KEY('id')
          );`);
      await db.executeSql(`CREATE TABLE IF NOT EXISTS 'tests_details' (
            'id'	TEXT NOT NULL,
          	'test'	TEXT NOT NULL,
            FOREIGN KEY("id") REFERENCES "tests"("id"),
            PRIMARY KEY("id")
          );`);
      let connection = await NetInfo.fetch();
      if(connection.isInternetReachable){
          const tests = await (await fetch('http://tgryl.pl/quiz/tests')).json();
          await db.executeSql(`DELETE FROM tests;`);
          await db.executeSql(`DELETE FROM tests_details;`);
          for(let test of tests){
            const details = await (await fetch('http://tgryl.pl/quiz/test/'+test.id)).json();
            await db.executeSql(`INSERT INTO tests VALUES (?, ?);`, [test.id, JSON.stringify(test)]);
            await db.executeSql(`INSERT INTO tests_details VALUES (?, ?);`, [details.id, JSON.stringify(details)]);
          }
          this.setState({connected: true})
      }
      else
        this.setState({connected: false})
      let status = await db.executeSql(`SELECT test FROM tests;`);
      const tests = [];
      for(let test of status[0].rows.raw()){
        test = JSON.parse(test.test);
        status = await db.executeSql(`SELECT test FROM tests_details WHERE id=?;`, [test.id]);
        test.details = JSON.parse(status[0].rows.raw()[0].test);
        tests.push(test);
      }

      this.setState({tests: _.shuffle(tests), loading:false});
    }
    catch(error){
      console.error(error);
      if(db !== undefined)
        db.close();
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
                  <DrawerContent
                  {...props}
                  dividerAfter={2}
                  refreshCallback={this.getTests}
                  connected={this.state.connected}
                  nick={this.props.nick}/>}
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
