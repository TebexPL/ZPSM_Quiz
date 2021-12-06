import * as React from 'react';
import {Component} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TestCard from './MainScreenComponents/TestCard';
import ResultsHint from './MainScreenComponents/ResultsHint';



class MainScreen extends Component{

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
      navigation: props.navigation,
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
