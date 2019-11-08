import React, {Component} from 'react';

import {View} from 'react-native';
import {Container, Text, Button} from '../../styles';
import Header from '../../Components/Header';
import moment from 'moment';
// import { Container } from './styles';

export default class Tree extends Component {
  state = {
    data: [
      {
        nome: 'Cedro',
        poda: 'Poda de Formação',
        criado: '08/11/2019',
        criadorPor: 'Luan',
      },
      {
        nome: 'Cedro',
        poda: 'Poda de Formação',
        criado: '08/11/2019',
        criadorPor: 'Luan',
      },
      {
        nome: 'Cedro',
        poda: 'Poda de Formação',
        criado: '08/11/2019',
        criadorPor: 'Luan',
      },
      {
        nome: 'Cedro',
        poda: 'Poda de Formação',
        criado: '08/11/2019',
        criadorPor: 'Luan',
      },
    ],
  };
  render() {
    return (
      <Container>
        <Header title="Árvore" create={true} route="TreeForm" />
        <Container>
          {this.state.data.map((item, index) => (
            <Button
              key={index}
              style={{backgroundColor: '#1de9b6', paddingBottom: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Nome:</Text>
                <Text style={{flex: 3}}>{item.nome}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Tipo de poda:</Text>
                <Text style={{flex: 3}}>{item.poda}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Criado:</Text>
                <Text style={{flex: 3}}>{item.criado}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1}}>Cadastrado:</Text>
                <Text style={{flex: 3}}>{item.criadorPor}</Text>
              </View>
            </Button>
          ))}
        </Container>
      </Container>
    );
  }
}
