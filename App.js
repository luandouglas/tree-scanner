import React, {Component} from 'react';

import Rotas from './src/router';
import {View} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Rotas />
      </View>
    );
  }
}
