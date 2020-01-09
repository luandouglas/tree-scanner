import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from '../views/Login';
import Menu from '../views/Menu';
import TreeList from '../views/Tree/List';
import TreeForm from '../views/Tree/Form';
import Pruning from '../views/Pruning';
import Maps from '../views/Maps';
export default class Rotas extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" initial component={Login} hideNavBar />
          <Scene key="TreeList" component={TreeList} hideNavBar />
          <Scene key="TreeForm" component={TreeForm} hideNavBar />
          <Scene key="Pruning" component={Pruning} hideNavBar />
          <Scene key="Maps" component={Maps} hideNavBar />
          <Scene key="Menu" component={Menu} hideNavBar />
        </Stack>
      </Router>
    );
  }
}
