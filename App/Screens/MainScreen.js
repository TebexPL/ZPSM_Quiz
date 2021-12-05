import * as React from 'react';
import {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import TestCard from './MainScreenComponents/TestCard';
import ResultsHint from './MainScreenComponents/ResultsHint';
import LoadingHint from './CommonComponents/LoadingHint';





class MainScreen extends Component{

  constructor(props){
    super(props);

    this.state = {
        navigation: props.navigation
    }
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 5,
      backgroundColor: '#D5D5D5',
    },
    itemContainer: {
      alignItems: 'center',
    }

  })

  render(){
    return (
      <ScrollView style={this.styles.container} contentContainerStyle={this.styles.itemContainer}>
        {this.props.loading ? <LoadingHint /> : <ResultsHint navigation={this.state.navigation}/>}

        {this.props.tests.map((test, key) =>
          <TestCard key={key} test={test} navigation={this.state.navigation} />
        )}
      </ScrollView>
    )
  }
};

export default MainScreen;
