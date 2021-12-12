import * as React from 'react';
import {Component} from 'react';
import Drawer from './Drawer.js';
import { AsyncStorage, View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2', 'AsyncStorage']);

import WelcomeScreen from './Screens/WelcomeScreen';
import {setCustomText} from 'react-native-global-props';

const globalTextProps = {
  style: {
    fontFamily: 'OpenSansCondensed-Light'
  }
};

setCustomText(globalTextProps);


class App extends Component{
  checkFirstTime = async () => {
    try {
      const value = await AsyncStorage.getItem('nick');
      if(value !== null)
        this.setState({firstTime: false});
      else
      this.setState({firstTime: true});

    } catch (error) {
      this.setState({firstTime: true});
    }
    finally{
      setTimeout(() => SplashScreen.hide(), 500);
    }
  };
  constructor(){
    super();
    this.state={
      firstTime: true
    }
  }

  componentDidMount(){

    this.checkFirstTime();
  }


  confirm = async (nick) => {
    if(!nick)
      return;
    try {
      await AsyncStorage.setItem('nick',nick);
    } catch (error) {
      console.log(error);
    }
    this.setState({firstTime: false});
  };


  render(){

      return this.state.firstTime
      ? (<WelcomeScreen confirm={this.confirm} />)
      : (<Drawer />)
  }

}

export default App;
