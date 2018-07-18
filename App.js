import React from 'react';
import {  Text, View, AppRegistry } from 'react-native';
import Header from "./src/component/header"

export default class App extends React.Component {
  render() {
    return (
      <View >

        <Header />
      </View>
    );
  }
}


//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});

AppRegistry.registerComponent("AwesomeProject", () => App)