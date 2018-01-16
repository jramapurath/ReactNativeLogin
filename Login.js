import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';


import { Profile } from '/Users/jramapurath/AwesomeReactNat/Profile';

import { validate } from '/Users/jramapurath/AwesomeReactNat/validate';

import * as loginActions from '/Users/jramapurath/AwesomeReactNat/src/actions/loginActions.js'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  onUserNameChange = (username) => {
    this.setState({ username });
    let v = validate('username', username);
    this.setState({ usernameValidationMessage: v[1] })
  }

  onPasswordChange = (password) => {
    this.setState({ password });
    let v = validate('password', password);
    this.setState({ passwordValidationMessage: v[1] })
  }

  onLoginClick = () => {
    this.props.userLogin({
      name: this.state.username,
      password: this.state.password
    })
  }

  render() {
    // const { navigate } = this.props.navigation;  
    const user = this.props.user
    // console.log('user val' + user && user.test ? user.test : 'no value')
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}>- LOGIN -</Text>

          <TextInput
            style={styles.textInput} placeholder='Username'
            onChangeText={this.onUserNameChange}
            underlineColorAndroid='transparent'
          />
          <Text style={styles.header}>- {user} -</Text>

          <Text style={styles.red}>{this.state.usernameValidationMessage}</Text>

          <TextInput
            style={styles.textInput} placeholder='Password'
            onChangeText={this.onPasswordChange}
            underlineColorAndroid='transparent'
          />

          <Text style={styles.red}>{this.state.passwordValidationMessage}</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.onLoginClick} >

            <Text>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ height: 25, width: 60, borderWidth: 1, alignSelf: 'flex-end', backgroundColor: '#4286f4', marginTop: 20 }}
             >

            <Text>Register</Text>

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    );

  }

}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
    borderRadius: 4,
  },
  red: {
    color: 'red',
  },

});

function mapStateToProps(state, ownProps) {
  debugger

  // const username = state && state.loginReducer ? state.loginReducer.name : ''
  // alert('username'+JSON.stringify(username))
  console.log('state' +  state ?  JSON.stringify(state) : '')
  console.log('loginreducer in mstp')
  console.log('loginreducer' + state.loginReducer ? state.loginReducer.name: 'no name set')
  return {
    user: state.loginReducer ? state.loginReducer.name: ''
  };
}

function mapDispatchToProps(dispatch) {
  debugger
  return {
    userLogin: user => dispatch(loginActions.userLogin(user))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);