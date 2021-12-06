import * as React from 'react';
import {Component} from 'react';
import Drawer from './Drawer.js';

import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);



class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Drawer />
    )
  }

}

export default App;
