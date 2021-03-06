import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import { Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/instagram.png';

export default createAppContainer(
  createStackNavigator({
    Feed,
    New,
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerTitle: <Image source={logo} />
      //headerBackTitle: null,
    },
    mode: 'modal'
  })
);
