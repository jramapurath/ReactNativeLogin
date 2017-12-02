import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from '/Users/jramapurath/AwesomeReactNat/Login'
import Profile from '/Users/jramapurath/AwesomeReactNat/Profile'

const Navigation = StackNavigator({
  Home: { screen: Login },
  Profile: {screen: Profile}
  });

export default Navigation;