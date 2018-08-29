import React, {Component}from 'react';
import { createStackNavigator } from 'react-navigation';
import Drawerlayout from './Drawerlayout';
export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = createStackNavigator({
  Drawerlayout: {
    screen: Drawerlayout,
  },
});