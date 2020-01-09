import React, {Component} from 'react';

import {View} from 'react-native';
import {Button, Label} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
// import { Container } from './styles';

export default class Header extends Component {
  save(model, schema) {}
  render() {
    return (
      <View
        style={{
          backgroundColor: '#2CAF1E',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => Actions.pop()}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            marginLeft: 5,
            backgroundColor: '#FFF',
            justifyContent: 'center',
          }}>
          <Icon
            style={{alignSelf: 'center'}}
            name="arrow-left"
            size={25}
            color="#000"
          />
        </Button>
        <Label
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '900',
            color: '#FFF',
          }}>
          {this.props.title}
        </Label>
        {this.props.save && (
          <Button
            onPress={() => {}}
            style={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              marginRight: 5,
              backgroundColor: '#FFF',
              justifyContent: 'center',
            }}>
            <Icon
              style={{alignSelf: 'center'}}
              name="check"
              color="#000"
              size={25}
            />
          </Button>
        )}
        {this.props.create && (
          <Button
            onPress={() => {
              Actions.push(this.props.route);
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              marginRight: 5,
              backgroundColor: '#FFF',
              justifyContent: 'center',
            }}>
            <Icon
              name="plus"
              size={30}
              color="#000"
              style={{alignSelf: 'center'}}
            />
          </Button>
        )}
      </View>
    );
  }
}
