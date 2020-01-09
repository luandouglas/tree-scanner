import React, {Component} from 'react';

import {View, Image, ScrollView} from 'react-native';
import {Container, Text} from '../../styles';
import Header from '../../Components/Header';

// import { Container } from './styles';

export default class Pruning extends Component {
  render() {
    return (
      <Container>
        <Header title="Tipos de poda" />
        <ScrollView
          scrollEnabled
          style={{padding: 20, flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 1}}>
              <Image
                resizeMode="contain"
                source={require('../../assets/LEVANTAMENTO_DA_COPA.png')}
                style={{
                  flex: 1,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'column',
                flex: 2,
              }}>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                Levantamento da copa
              </Text>
              <Text
                style={{
                  fontFamily: 'FontAwesome',
                  fontSize: 11,
                  textAlignVertical: 'center',
                }}>
                Consiste na eliminação dos ramos que estiverem até 0,70m de
                altura. Essa operação ajuda no controle das ervas daninhas e a
                melhor distribuição da água de irrigação por aspersão; também
                evita que os frutos dos ramos baixos entrem em contato com o
                solo
              </Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/PODA_CENTRAL_DE_ILUMINAÇÃO.png')}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'column',
                flex: 2,
              }}>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                Poda central de iluminação
              </Text>
              <Text
                style={{
                  fontFamily: 'FontAwesome',
                  fontSize: 11,
                  textAlignVertical: 'center',
                }}>
                A poda de abertura central da mangueira consiste em eliminar
                ramos que tenham um ângulo de inserção com o tronco menor que
                45º. Com isso, consegue-se uma maior iluminação. Os ramos de
                maior diâmetro da planta, que tenham uma parte voltada para o
                sol poente, devem ser pincelados com uma solução de água: cal
                (1:2) logo após a poda, a fim de serem evitadas rachaduras
                provocadas pelo sol.
              </Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/PODA_LATERAL.png')}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'column',
                flex: 2,
              }}>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                Poda lateral
              </Text>
              <Text
                style={{
                  fontFamily: 'FontAwesome',
                  fontSize: 11,
                  textAlignVertical: 'center',
                }}>
                É a poda que se efetua para manter um espaçamento adequado entre
                as fileiras de plantas, e que vai permitir a passagem de
                máquinas e veículos, e facilitando o processo de pulverizações,
                colheitas, etc. É comum deixar que a rua entre plantas
                corresponda a 45% do espaçamento entre fileiras. Exemplo: um
                espaçamento de 8,0m x 5,0m deve ter uma rua com largura de 3,6m
                (45%).
              </Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/PODA_DE_TOPO.png')}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                flex: 2,
              }}>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                Poda de topo
              </Text>
              <Text
                style={{
                  fontFamily: 'FontAwesome',
                  fontSize: 11,
                  textAlignVertical: 'center',
                }}>
                É a poda efetuada para manter a altura da planta num limite
                adequado à condução do pomar. Normalmente, considera-se como
                ideal, uma altura máxima igual a 55% do espaçamento entre
                fileiras da planta, ou seja, num espaçamento de 8,0m x 5,0m, a
                altura máxima da planta deve ser de 4,4m (55%)
              </Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
