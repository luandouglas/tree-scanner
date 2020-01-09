import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Heatmap} from 'react-native-maps';
import {View, StyleSheet, Text, Picker} from 'react-native';
import getRealm from '../../schemas';
import Geolocation from '@react-native-community/geolocation';
import reactotron from 'reactotron-react-native';
import {Header, Button, Label} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
// import { Container } from './styles';

export default class Maps extends Component {
  state = {markers: [], region: {}, selectedMap: 'heat', Heats: []};
  async componentDidMount() {
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
    const realm = await getRealm();
    let markers = realm.objects('Specie');
    let aux = [];
    markers.forEach(e => {
      let ax = {latitude: e.latitude, longitude: e.longitude, weight: -1};
      aux.push(ax);
    });
    this.setState({Heats: aux, markers});
  }
  render() {
    return (
      <View style={{flex: 1}}>
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
            Mapa
          </Label>
          <Button
            style={{
              width: 25,
              height: 25,
            }}></Button>
        </Header>
        <View
          style={{
            backgroundColor: '#FFF',
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{flex: 2}}>Tipo de mapa: </Text>
          <View style={{flex: 1}}>
            <Picker
              selectedValue={this.state.selectedMap}
              onValueChange={selectedMap => this.setState({selectedMap})}>
              <Picker.Item label="Heat" value="heat" key="heat"></Picker.Item>
              <Picker.Item
                label="Points"
                value="points"
                key="points"></Picker.Item>
            </Picker>
          </View>
        </View>
        <View style={{flex: 1}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            rotateEnabled={false}
            // onRegionChange={e => this.onRegionChange(e)}
            region={this.state.region}>
            {this.state.markers.length > 0 ? (
              this.state.selectedMap == 'heat' ? (
                <Heatmap
                  points={this.state.Heats}
                  opacity={1}
                  radius={40}
                  maxIntensity={100}
                  gradientSmoothing={10}
                  heatmapMode={'POINTS_DENSITY'}
                />
              ) : (
                this.state.markers.map((e, index) => {
                  return (
                    <Marker
                      key={index}
                      coordinate={{
                        latitude: e.latitude,
                        longitude: e.longitude,
                      }}
                    />
                  );
                })
              )
            ) : null}
          </MapView>
        </View>
      </View>
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
