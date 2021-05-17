import React from 'react';
import { Actions } from 'react-native-router-flux';
import Quiz  from './Quiz';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';

const rootRef = firebase.database().ref();

const userRef = rootRef.child('users');

export default class Playquiz2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quizFinish : true,
      score: 0
    }
  }
  _onPressBack(){
    const {location} = this.props.location
    console.log(location,"playquiz")
    Actions.MainPage({
      data: {
        yourGPSLocation:location,
      }}
    )      
  }
   
  _quizFinish(){ 
      
    this.setState({ quizFinish: true, score : scoreT })
  }
  _scoreMessage(){
    console.log(this.props.data.score)
    const scoreT = this.props.data.score+20;
    const {email} = this.props.email
    console.log(this.props.email)
    if(scoreT <= 30){
      return (
        rootRef
        .child('users')
        .orderByChild('email')
        .equalTo(email)
        .once('value', snapshot => {
          if (snapshot.exists()) {
            var datata = Object.keys(snapshot.val())[0];  
            const trophyRef = userRef.child(datata);
            const userData = snapshot.val();
            console.log(userData.key)
            trophyRef.update({
              trophy:'Peri Bacaları Bronz'
            })
          }}),
        
      <View style={styles.innerContainer} >
                <View style={{ flexDirection: "row"}} >
                  <Icon name="trophy" size={30} color="white" />
                </View>
                <Text style={styles.score}>You need to work hard</Text>
                <Text style={styles.score}>You scored {scoreT}</Text>
              </View>)
    }else if(scoreT > 30 && scoreT < 60){
      return (
        rootRef
        .child('users')
        .orderByChild('email')
        .equalTo(email)
        .once('value', snapshot => {
          if (snapshot.exists()) {
            var datata = Object.keys(snapshot.val())[0];  
            const trophyRef = userRef.child(datata);
            const userData = snapshot.val();
            console.log(userData.key)
            trophyRef.update({
              trophy:'Peri Bacaları Gümüş'
            })
          }}),
      <View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are good</Text>
                  <Text style={styles.score}>Congrats you scored {scoreT} </Text>
                </View>)
    }else if(scoreT >= 60){
      return (
        rootRef
        .child('users')
        .orderByChild('email')
        .equalTo(email)
        .once('value', snapshot => {
          if (snapshot.exists()) {
            var datata = Object.keys(snapshot.val())[0];  
            const trophyRef = userRef.child(datata);
            const userData = snapshot.val();
            console.log(userData.key)
            trophyRef.update({
              trophy:'Peri Bacaları Altın'
            })
          }}),
      <View style={styles.innerContainer}>
                 <View style={{ flexDirection: "row"}} >
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                  </View>
                  <Text style={styles.score}>You are the master</Text>
                  <Text style={styles.score}>Congrats you scored {scoreT} </Text>
                </View>)
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content"/>
      

       { this.state.quizFinish ? <View style={styles.container}>
           <View style={styles.circle}>

             { this._scoreMessage() }
           </View>

       </View> :  <Quiz quizFinish={(score) => this._quizFinish(score)} /> }

      </View>
    );
  }
}
const scoreCircleSize = 300
const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 20,
    fontStyle: 'italic'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize/2,
    backgroundColor: "green"
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    },
    toolbarButton:{
        width: 55,
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    }
});
/*
<View style={styles.toolbar}>
                    <TouchableOpacity onPress={() => this._onPressBack() }><Text style={styles.toolbarButton}>Back</Text></TouchableOpacity>
                    <Text style={styles.toolbarTitle}></Text>
                    <Text style={styles.toolbarButton}></Text>
      </View>*/