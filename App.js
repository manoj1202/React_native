import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from "./src/component/header"
import AlbumList from "./src/component/AlbumList"

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent("AwesomeProject", () => App)