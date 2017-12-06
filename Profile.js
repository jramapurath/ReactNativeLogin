import React, { Component } from 'react';
import { AppRegistry, Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { validate } from '/Users/jramapurath/AwesomeReactNat/validate';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      cpassword: '',
    }
  }

  onNameChange = (name) => {
    this.setState({ name });
    let v = validate('username', name);
    this.setState({ nameValidationMessage: v[1] })
  }

  onEmailChange = (email) => {
    this.setState({ email });
    let v = validate('email', email);
    this.setState({ emailValidationMessage: v[1] })
  }

  onPasswordChange = (password) => {
    this.setState({ password });
    let v = validate('password', password);
    this.setState({ passwordValidationMessage: v[1] })
  }

  onConfirmPasswordChange = (cpassword) => {
    this.setState({ cpassword });
    let v = validate('cpassword', cpassword);
    this.setState({ confirmValidationMessage: v[1] })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

        <Text style={styles.header}>Sign Up</Text>

          <TextInput
            style={styles.textInput} placeholder='Name'
            onChangeText={this.onNameChange}
            underlineColorAndroid='transparent'
          />

          <Text style={styles.red}>{this.state.nameValidationMessage}</Text>

          <TextInput
            style={styles.textInput} placeholder='Email'
            onChangeText={this.onEmailChange}
            underlineColorAndroid='transparent'
          />

          <Text style={styles.red}>{this.state.emailValidationMessage}</Text>

          <TextInput
            style={styles.textInput} placeholder='Password'
            onChangeText={this.onPasswordChange}
            underlineColorAndroid='transparent'
          />

          <Text style={styles.red}>{this.state.passwordValidationMessage}</Text>

          <TextInput
            style={styles.textInput} placeholder='Confirm password'
            onChangeText={this.onConfirmPasswordChange}
            underlineColorAndroid='transparent'
          />

          <Text style={styles.red}>{this.state.confirmValidationMessage}</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {      
              navigate('Profile')
            }
          } 
        >

            <Text>Register</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    );
  }
}   

validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
    padding: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    height:40,
    borderRadius: 4,
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
    marginTop:50,
    borderRadius: 4,
  },
  red: {
    color: 'red',
  },


});
