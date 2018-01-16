import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Text, StyleSheet, View } from 'react-native';
import configureStore from './src/store/configureStore';
import { StackNavigator } from 'react-navigation';

import Login from '/Users/jramapurath/AwesomeReactNat/Login'
import Profile from '/Users/jramapurath/AwesomeReactNat/Profile'

import rootReducer from './src/reducer';

import {Provider} from 'react-redux';

// Store & Router
const store = configureStore({});

//const store = createStore(todoApp,{})

const app = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default app;