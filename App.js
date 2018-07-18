import React from 'react';
import {  Text, View, AppRegistry } from 'react-native';
import Header from "./src/component/header"

export default class App extends React.Component {
  render() {
    return (
      <View >

        <Header headerText={"Albums"} />
      </View>
    );
  }
}




AppRegistry.registerComponent("AwesomeProject", () => App)