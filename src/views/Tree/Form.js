import React, {Component} from 'react';

import {View, Picker, StyleSheet, Modal, Image, Alert} from 'react-native';
import {
  Container,
  Field,
  Label,
  Input,
  Row,
  Header,
  Button,
  Text,
} from '../../styles';
import TextInput from '../../Components/TextInput';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Geolocation from '@react-native-community/geolocation';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getRealm from '../../schemas';
import moment from 'moment';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import reactotron from 'reactotron-react-native';
// import { Container } from './styles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibHVhbmRvdWdsYXMiLCJhIjoiY2sycGxtZDliMDVsOTNjbzM2aDh2Z2R1ZSJ9.l7xlITsjOR3w_sfb5_-s7Q',
);
export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      species: [],
      createSpecie: false,
      createText: '',
      model: {
        registredBy: '',
        specie: '',
        typePruning: '',
        description: '',
        date: moment(new Date()).format('DD/MM/YYYY HH:mm'),
        longitude: 0,
        latitude: 0,
      },
      region: {},
      podas: [
        {nome: 'Poda de limpeza ou Manutenção', id: 1},
        {nome: 'Poda de Formação', id: 1},
        {nome: 'Poda de Condução', id: 1},
        {nome: 'Desbrota', id: 1},
        {nome: 'Podas de Raízes', id: 1},
      ],
      markers: undefined,
      id: 1,
    };
  }
  async componentDidMount() {
    let realm = await getRealm();
    let species = realm.objects('Tree');
    console.log(species[0]);
    this.setState({species});
    if (this.props._id) {
      let res = realm.objectForPrimaryKey('Specie', this.props._id);
      let aux = {...res};

      this.setState({
        markers: {
          latitude: aux.latitude,
          longitude: aux.longitude,
        },
        model: aux,
      });
      this.setState({
        region: {
          latitude: aux.latitude,
          longitude: aux.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      Geolocation.getCurrentPosition(info => {
        let coordinates = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        };
        this.setState({
          region: {
            ...coordinates,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      });
    }
  }

  async save() {
    reactotron.log(this.state);
    if (this.state.model.specie == '' || this.state.model.typePruning == '') {
      Alert.alert('Preencha os campos obrigátorios');
    } else {
      let aux = this.state;
      let model = aux.model;
      model.latitude = aux.markers.latitude;
      model.longitude = aux.markers.longitude;

      const realm = await getRealm();
      let len = realm.objects('Specie');
      if (this.props._id) {
        realm.write(() => {
          realm.create('Specie', this.state.model, true);
          Actions.push('TreeList');
        });
      } else {
        realm.write(() => {
          realm.create('Specie', {...this.state.model, id: len.length + 1});
          Actions.push('TreeList');
        });
      }
    }
  }
  onMapPress(e) {
    this.setState({
      markers: e.nativeEvent.coordinate,
    });
  }
  onRegionChange(region) {
    this.setState({region});
  }
  async addSpecie(text) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(
        'Tree',
        {
          name: text,
          value: text.toLowerCase(),
        },
        true,
      );
    });
    let aux = realm.objects('Tree');

    this.setState({
      species: aux,
      createSpecie: false,
      createText: '',
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Button
            onPress={() => Actions.pop()}
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
              fontSize: 25,
              fontWeight: '900',
              color: '#FFF',
            }}>
            Cadastrar Espécie
          </Label>
          <Button
            onPress={() => {
              this.save();
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
              name="check"
              size={20}
              color="#000"
            />
          </Button>
        </Header>

        <Container style={{paddingTop: 20}}>
          <Row>
            <TextInput
              value={this.state.model.registredBy}
              onChangeText={registredBy =>
                this.setState({model: {...this.state.model, registredBy}})
              }
              style={{borderWidth: 1, borderColor: '#CCC'}}
              label="Cadastrado por:"
            />
          </Row>
          <Row>
            <View style={{flex: 1}}>
              <Picker
                selectedValue={this.state.model.specie}
                onValueChange={specie =>
                  this.setState({model: {...this.state.model, specie}})
                }>
                {this.state.species.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.value}
                      key={index}
                    />
                  );
                })}
              </Picker>
            </View>
            <Modal
              visible={this.state.createSpecie}
              onRequestClose={() => this.setState({createSpecie: false})}
              transparent>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    alignSelf: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#FFF',
                    width: 300,
                    height: 100,
                  }}>
                  <TextInput
                    value={this.state.createText}
                    onChangeText={createText => this.setState({createText})}
                    style={{borderWidth: 1, borderColor: '#CCC'}}
                    label="Descrição:"
                  />
                  <Row>
                    <Button
                      style={{flex: 1, left: 5}}
                      onPress={() => {
                        this.setState({createSpecie: false, createText: ''});
                      }}>
                      <Label style={{textAlign: 'left'}}>Cancelar</Label>
                    </Button>
                    <Button
                      style={{flex: 1, right: 5}}
                      onPress={() => {
                        if (this.state.createText != '') {
                          this.addSpecie(this.state.createText);
                        }
                      }}>
                      <Label style={{textAlign: 'right'}}>Salvar</Label>
                    </Button>
                  </Row>
                </View>
              </View>
            </Modal>
            {/* <TextInput
              value={this.state.model.specie}
              onChangeText={specie =>
                this.setState({model: {...this.state.model, specie}})
              }
              style={{flex: 1, borderWidth: 1, borderColor: '#CCC'}}
              label="Nome da espécie:"
            /> */}
            <Icon
              name="plus"
              onPress={() => this.setState({createSpecie: true})}
              size={18}
              color="#AAA"
              style={{right: 5}}
            />
          </Row>
          <Row>
            <TextInput
              value={this.state.model.description}
              onChangeText={description =>
                this.setState({model: {...this.state.model, description}})
              }
              style={{borderWidth: 1, borderColor: '#CCC'}}
              label="Descrição:"
            />
          </Row>
          <Row>
            {this.state.visible == false ? (
              <View style={{flexDirection: 'column', flex: 1}}>
                {this.state.model.typePruning == '' ? null : (
                  <Text
                    style={{
                      left: 5,
                      color:
                        this.state.model.typePruning == ''
                          ? '#bfbfbfbf'
                          : '#2caf1e',
                    }}>
                    Tipo de poda
                  </Text>
                )}
                <Button
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => {
                    this.setState({visible: true});
                  }}>
                  <Text
                    style={{
                      left: 5,
                      color:
                        this.state.model.typePruning == ''
                          ? '#bfbfbfbf'
                          : '#000',
                      fontSize: this.state.model.typePruning == '' ? 18 : 14,
                      flex: 1,
                    }}>
                    {this.state.model.typePruning == ''
                      ? 'Selecione Tipo de poda:'
                      : this.state.model.typePruning}
                  </Text>
                  <Icon
                    name="chevron-down"
                    size={25}
                    color="#AAA"
                    style={{right: 5}}
                  />
                </Button>
              </View>
            ) : (
              <View style={{margin: 20}}>
                <Modal
                  visible={this.state.visible}
                  onRequestClose={() => this.setState({visible: false})}
                  animationType="slide"
                  transparent={true}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        alignSelf: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#FFF',
                        width: 300,
                        height: 350,
                      }}>
                      <Button
                        onPress={() => {
                          this.setState({
                            model: {
                              ...this.state.model,
                              typePruning: 'Levantamento da copa',
                            },
                            visible: false,
                          });
                        }}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          borderBottomWidth: 1,
                          borderBottomColor: '#CCC',
                        }}>
                        <Text
                          style={{
                            flex: 2,
                            fontSize: 20,
                            textAlign: 'center',
                            fontFamily: 'Roboto-Medium',
                            textAlignVertical: 'center',
                          }}>
                          Levantamento da copa
                        </Text>
                        <View style={{flex: 1}}>
                          <Image
                            resizeMode="contain"
                            source={require('../../assets/LEVANTAMENTO_DA_COPA.png')}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              width: 70,
                              height: 70,
                            }}
                          />
                        </View>
                      </Button>
                      <Button
                        onPress={() => {
                          this.setState({
                            model: {
                              ...this.state.model,
                              typePruning: 'Poda central de iluminação',
                            },
                            visible: false,
                          });
                        }}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          borderBottomWidth: 1,
                          borderBottomColor: '#CCC',
                        }}>
                        <Text
                          style={{
                            flex: 2,
                            fontSize: 20,
                            fontFamily: 'Roboto-Medium',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                          }}>
                          Poda central de iluminação
                        </Text>
                        <View style={{flex: 1}}>
                          <Image
                            resizeMode="contain"
                            source={require('../../assets/PODA_CENTRAL_DE_ILUMINAÇÃO.png')}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              width: 70,
                              height: 70,
                            }}
                          />
                        </View>
                      </Button>
                      <Button
                        onPress={() => {
                          this.setState({
                            model: {
                              ...this.state.model,
                              typePruning: 'Poda lateral',
                            },
                            visible: false,
                          });
                        }}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          borderBottomWidth: 1,
                          borderBottomColor: '#CCC',
                        }}>
                        <Text
                          style={{
                            flex: 2,
                            fontSize: 20,
                            fontFamily: 'Roboto-Medium',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                          }}>
                          Poda lateral
                        </Text>
                        <View style={{flex: 1}}>
                          <Image
                            resizeMode="contain"
                            source={require('../../assets/PODA_LATERAL.png')}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              width: 70,
                              height: 70,
                            }}
                          />
                        </View>
                      </Button>
                      <Button
                        onPress={() => {
                          this.setState({
                            model: {
                              ...this.state.model,
                              typePruning: 'Poda de topo',
                            },
                            visible: false,
                          });
                        }}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          borderBottomWidth: 1,
                          borderBottomColor: '#CCC',
                        }}>
                        <Text
                          style={{
                            flex: 2,
                            fontSize: 20,
                            fontFamily: 'Roboto-Medium',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                          }}>
                          Poda de topo
                        </Text>
                        <View style={{flex: 1}}>
                          <Image
                            resizeMode="contain"
                            source={require('../../assets/PODA_DE_TOPO.png')}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              width: 70,
                              height: 70,
                            }}
                          />
                        </View>
                      </Button>
                    </View>
                  </View>
                </Modal>
              </View>
            )}
          </Row>
          <View style={{flex: 1, marginTop: 1}}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              // onRegionChange={e => this.onRegionChange(e)}
              region={this.state.region}
              onPress={e => this.onMapPress(e)}>
              {this.state.markers != undefined ? (
                <Marker coordinate={this.state.markers} pinColor={'#2caf1e'} />
              ) : null}
            </MapView>
          </View>
        </Container>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  annotationContainer: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#64863B',
    transform: [{scale: 1}],
  },
});
