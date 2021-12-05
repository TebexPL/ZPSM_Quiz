import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultTable from './ResultScreenComponents/ResultTable';
import LoadingHint from './CommonComponents/LoadingHint';




class ResultScreen extends Component{

  getResults = async () => {
    try{
      const response = await fetch('http://tgryl.pl/quiz/results');
      const results = await response.json();
      this.setState({results: results, loading: false});
    }
    catch(error){
      console.error(error);
    }
  }

  constructor(props){
    super(props);
    this.state = {
      results: [],
      loading: true
    }
    this.getResults();
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
        {this.props.loading ? <LoadingHint /> : <ResultTable results={this.state.results} />}


      </ScrollView>
    )
  }
};

export default ResultScreen;
