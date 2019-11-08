import React, {Component} from 'react';

import {View, Image, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Container, Label, Field, Button, Text, Row} from '../../styles';
import {Actions} from 'react-native-router-flux';
// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex: 2}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/logo.png')}
              style={{
                width: null,
                height: null,
                resizeMode: 'contain',
                alignSelf: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Field>
              <Label style={{color: '#FFF'}}>Login</Label>
              <Input placeholder="Login" style={{backgroundColor: '#FFF'}} />
            </Field>
            <Field>
              <Label style={{color: '#FFF'}}>Senha</Label>
              <Input
                placeholder="Senha"
                style={{backgroundColor: '#FFF'}}
                secureTextEntry
              />
            </Field>
          </View>
        </View>
        <Container style={{flex: 1}}>
          <Button
            onPress={() => {
              Actions.push('Menu');
            }}
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#CCC',
              backgroundColor: '#FFF',
              borderRadius: 10,
              height: 40,
              width: 100,
              zIndex: 99,
              marginTop: 30,
              justifyContent: 'center',
            }}>
            <Text>Entrar</Text>
          </Button>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
