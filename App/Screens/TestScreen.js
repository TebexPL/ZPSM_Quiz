import * as React from 'react';
import {Component} from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './TestScreenComponents/Header';

class TestScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      test: props.test,
      taskNumber: 0,
      remainingTime: props.test.details.tasks[0].duration,
      score:0,
      completed:false
    }
  }

  styles = StyleSheet.create({
    container:{
       flex: 1,
       height: '100%',
       flexDirection: 'column'
    },
    header:{
      flex:1,
      alignItems: 'center',
      padding: '5%',
      width: '100%'
    },
    testName:{
      fontSize: 30,
      marginBottom: 20
    },
    question: {
      textAlign: 'center',
      fontSize: 25,
      marginTop: 20
    },
    progressBar:{
      width: '80%'
    },
    answer:{
      flex:1,
      backgroundColor: 'white',
      alignItems: 'flex-start',
      justifyContent: 'center',
      fontSize: 30,
      padding: 5,
      marginTop: 5
    }

  })

  nextTest(){
    if(this.state.taskNumber+1==this.state.test.details.tasks.length){
      this.setState({completed: true});
      clearInterval(this.state.interval);
    }
    else
      this.setState({
        taskNumber: this.state.taskNumber+1,
        remainingTime: this.state.test.details.tasks[this.state.taskNumber+1].duration})

  }

  tick = () => {
    if(this.state.remainingTime <= 0.0){
      this.nextTest();
    }
    else{
      this.setState({remainingTime: this.state.remainingTime-0.1});
    }
  };

  verify(isCorrect){
    if(isCorrect)
      this.setState({score: this.state.score+1})
    this.nextTest();
  }

  componentDidMount(){
    this.setState({interval: setInterval(this.tick, 100)});
  }



  render(){

    const styles=this.styles;
    const task = this.state.test.details.tasks[this.state.taskNumber];
    const taskNumber = this.state.taskNumber;
    const tasksLength = this.state.test.details.tasks.length;
    return (

      <View style={styles.container}>
        <View style={[styles.container,{display: this.state.completed ? 'none' : 'flex'}]}>
          <Header task={task} taskNumber={taskNumber+1} tasksLength={tasksLength} time={this.state.remainingTime}/>
            {task.answers.map((item, key) =>
              <TouchableOpacity style={this.styles.answer} key={key} onPress={() => this.verify(item.isCorrect)}>
                <Text style={{fontSize: 20}}>{item.content}</Text>
              </TouchableOpacity>
            )}
        </View>
        <View style={[styles.container,{display: this.state.completed ? 'flex' : 'none'}]}>
        <Text>WYNIK:{this.state.score}</Text>
        </View>
      </View>

    )
  }
};

export default TestScreen;
