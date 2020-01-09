import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import {Container, Button, Row, Label} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import Header from '../../Components/Header';
// import { Container } from './styles';
const {width, height} = Dimensions.get('window');
export default class Menu extends Component {
  renderCard(icon, text, route) {
    return (
      <Button
        onPress={() => Actions.push(route)}
        style={{
          borderLeftWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#CCC',
          width: width / 3,
          height: 100,
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Icon name={icon} size={25} color="#AAA" style={{flex: 1}} />
        <Label style={{flex: 1}}>{text}</Label>
      </Button>
    );
  }
  render() {
    return (
      <Container>
        <Container>
          <Button onPress={() => Actions.push('login')}>
            <Label style={{textAlign: 'right'}}>Sair</Label>
          </Button>
          <Button
            onPress={() => {
              Actions.push('Maps');
            }}
            style={{
              flex: 1,
              backgroundColor: '#1de9b6',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="map-marker" size={30} color="#FFF" />
            <Label style={{color: '#FFF', fontSize: 25, marginLeft: 10}}>
              Mapa
            </Label>
          </Button>
          <Button
            onPress={() => {
              Actions.push('TreeList');
            }}
            style={{
              flex: 1,
              backgroundColor: '#6200ea',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="tree" size={30} color="#FFF" />
            <Label style={{color: '#FFF', fontSize: 25, marginLeft: 10}}>
              Visualizar Árvores
            </Label>
          </Button>
          <Button
            onPress={() => {
              Actions.push('Pruning');
            }}
            style={{
              flex: 1,
              backgroundColor: '#e53935',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="pine-tree" size={30} color="#FFF" />
            <Label style={{color: '#FFF', fontSize: 25, marginLeft: 10}}>
              Visualizar tipos de poda
            </Label>
          </Button>
        </Container>
      </Container>
    );
  }
}
