import React, {Component} from 'react';

import {View, Image, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Container, Label, Field, Button, Text, Row} from '../../styles';
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import reactotron from 'reactotron-react-native';
// import { Container } from './styles';

export default class Login extends Component {
  state = {email: '', password: ''};
  login = async () => {
    const {email, password} = this.state;
    // firebase.database().
  };
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Image
            resizeMode={'contain'}
            source={require('../../assets/logo.png')}
            style={{
              margin: 10,
              flex: 1,
              width: undefined,
              height: undefined,
            }}
          />
        </View>
        <Container style={{flex: 1}}>
          <View style={{justifyContent: 'center'}}>
            <Field>
              <Input
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                placeholder="E-Mail"
                style={{backgroundColor: '#FFF'}}
              />
            </Field>
            <Field>
              <Input
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                placeholder="Senha"
                style={{backgroundColor: '#FFF'}}
                secureTextEntry
              />
            </Field>
          </View>
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
          <Label style={{textAlign: 'center'}}>Entrar como anônimo</Label>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
