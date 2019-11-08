import React, {Component} from 'react';

import {View} from 'react-native';
import {Button, Label} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
// import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Button>
          <Icon name="menu" size={30} color="#000" style={{paddingLeft: 5}} />
        </Button>
        <Label
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '900',
          }}>
          {this.props.title}
        </Label>
        {this.props.create && (
          <Button
            onPress={() => {
              Actions.push(this.props.route);
            }}>
            <Icon
              name="plus"
              size={30}
              color="#000"
              style={{paddingRight: 5}}
            />
          </Button>
        )}
      </View>
    );
  }
}
