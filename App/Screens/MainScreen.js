import * as React from 'react';
import {Component} from 'react';
import { TouchableOpacity, FlatList, Text, StyleSheet, RefreshControl } from 'react-native';
import TestCard from './MainScreenComponents/TestCard';
import ResultsHint from './MainScreenComponents/ResultsHint';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';




class MainScreen extends Component{

  getTests = async () => {
    this.setState({tests: [], loading:true});
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

  constructor(props){
    super(props);
    console.log();
    this.state = {
      tests: [],
      navigation: props.navigation,
      drawer: props.drawer,
      loading: true
    }
  }

  componentDidMount(){
    this.getTests();
  }

  renderItem = ({ item }) => (
      <TestCard test={item} navigation={this.state.navigation} />
  );


  render(){
    return (

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
            onRefresh={this.getTests}
          />
        }
         ListHeaderComponent={<ResultsHint navigation={this.state.navigation}/>}
         data={this.state.tests}
         renderItem={this.renderItem}
         keyExtractor={item => item.id}
       />

    )
  }
};

export default MainScreen;
