import React, {Component} from 'react';

import {View, Picker} from 'react-native';
import {Container, Field, Label, Input, Row} from '../../styles';

import Header from '../../Components/Header';

// import { Container } from './styles';

export default class Form extends Component {
  state = {
    podas: [
      {nome: 'Poda de limpeza ou Manutenção', id: 1},
      {nome: 'Poda de Formação', id: 1},
      {nome: 'Poda de Condução', id: 1},
      {nome: 'Desbrota', id: 1},
      {nome: 'Podas de Raízes', id: 1},
    ],
  };
  render() {
    return (
      <Container>
        <Header title="Cadastrar árvore" />
        <Container style={{paddingTop: 20}}>
          <Row>
            <Input
              placeholder="Nome da espécie"
              style={{backgroundColor: '#FFF'}}
            />
          </Row>
          <Row>
            <Input placeholder="Descrição" style={{backgroundColor: '#FFF'}} />
          </Row>
          <Row>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#CCC',
              }}>
              <Picker>
                <Picker.Item
                  label={'Selecione o tipo de poda'}
                  value={null}
                  key={null}
                  color="#AAA"
                />
                {this.state.podas.map((item, index) => (
                  <Picker.Item label={item.nome} value={item.id} key={index} />
                ))}
              </Picker>
            </View>
          </Row>
        </Container>
      </Container>
    );
  }
}
