import React from 'react';
import firebase from 'firebase';
import { StyleSheet } from 'react-native';
import Control from './Control';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
	}

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDqYuLYEHSeiO0PrT4zPWornW7mHX8uP80",
      authDomain: "trivia-1ec67.firebaseapp.com",
      databaseURL: "https://trivia-1ec67.firebaseio.com",
      projectId: "trivia-1ec67",
      storageBucket: "trivia-1ec67.appspot.com",
      messagingSenderId: "308224065203"
    };
    firebase.initializeApp(config);
  }

  render(){
    return (
      <Control />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
