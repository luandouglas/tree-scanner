import React, {Component} from 'react';

import {View, ScrollView} from 'react-native';
import {Container, Text, Button, Header, Label} from '../../styles';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getRealm from '../../schemas';
import reactotron from 'reactotron-react-native';
import {Actions} from 'react-native-router-flux';
// import { Container } from './styles';

export default class Tree extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    let realm = await getRealm();
    this.setState({data: realm.objects('Specie')});
    reactotron.log(this.state.data);
  }

  render() {
    return (
      <Container>
        <Header>
          <Button
            onPress={() => Actions.push('Menu')}
            style={{
              width: 25,
              height: 25,
              borderRadius: 25 / 2,
              marginLeft: 5,
              backgroundColor: '#FFF',
              justifyContent: 'center',
            }}>
            <Icon
              style={{alignSelf: 'center'}}
              name="arrow-left"
              size={20}
              color="#000"
            />
          </Button>
          <Label
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '900',
              color: '#FFF',
            }}>
            Espécies Cadastradas
          </Label>
          <Button
            onPress={() => {
              Actions.push('TreeForm');
            }}
            style={{
              width: 25,
              height: 25,
              borderRadius: 25 / 2,
              marginRight: 5,
              backgroundColor: '#FFF',
              justifyContent: 'center',
            }}>
            <Icon
              style={{alignSelf: 'center'}}
              name="plus"
              size={20}
              color="#000"
            />
          </Button>
        </Header>
        <ScrollView scrollEnabled>
          {this.state.data.map((item, index) => (
            <Button
              onPress={() => Actions.push('TreeForm', {_id: item.id})}
              key={index}
              style={{
                paddingHorizontal: 10,
                paddingBottom: 10,
                backgroundColor: index % 2 == 0 ? '#EEE' : '#FFF',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Nome:</Text>
                <Text style={{flex: 3}}>{item.registredBy}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Tipo de poda:</Text>
                <Text style={{flex: 3}}>{item.typePruning}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Espécie:</Text>
                <Text style={{flex: 3}}>{item.specie}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Cadastrado:</Text>
                <Text style={{flex: 3}}>{item.date}</Text>
              </View>
            </Button>
          ))}
        </ScrollView>
      </Container>
    );
  }
}
