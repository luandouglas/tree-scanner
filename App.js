import React, {Component} from 'react';

import Rotas from './src/router';
import {View} from 'react-native';
import getRealm from './src/schemas';

export default class App extends Component {
  async componentDidMount() {
    const realm = await getRealm();
    let count = realm.objects('Tree');
    if (count.length <= 10) {
      let aux = [
        {name: 'Niin', value: 'niin'},
        {name: 'Acacia', value: 'acacia'},
        {name: 'Oliveira', value: 'oliveira'},
        {name: 'Ficus', value: 'ficus'},
        {name: 'Manga', value: 'manga'},
        {name: 'Limão', value: 'limao'},
        {name: 'Palmeira', value: 'palmeira'},
        {name: 'Oití', value: 'oiti'},
        {name: 'Castanhola', value: 'castanhola'},
        {name: 'Cajú', value: 'caju'},
      ];
      aux.forEach(element => {
        realm.write(() => {
          realm.create('Tree', element, true);
        });
      });
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Rotas />
      </View>
    );
  }
}
