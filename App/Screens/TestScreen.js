import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class TestScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      test: props.test
    }
  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          {this.state.test.name}
        </Text>
      </View>
    )
  }
};

export default TestScreen;
