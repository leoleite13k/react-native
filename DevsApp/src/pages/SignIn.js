import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, Button, TextInput, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changePassword, login } from '../actions/AuthActions';

class SignIn extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };
  }

  componentDidUpdate() {
    if (this.props.status == 1) {
      Keyboard.dismiss();
      this.props.navigation.navigate('Conversations');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.email}
          onChangeText={this.props.changeEmail}
        />
        <Text style={styles.title}>
          Senha
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.password}
          secureTextEntry={true}
          onChangeText={this.props.changePassword}
        />
        <Button
          title="Entrar"
          onPress={() => {
            this.props.login(this.props.email, this.props.password);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
  },
  input:{
    height: 50,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    marginBottom: 5,
    padding: 10,
  },
  title:{
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 5,
  }
});

const mapStateToProps = (state) => {
  return{
    uid:state.auth.uid,
    email:state.auth.email,
    password:state.auth.password,
    status:state.auth.status
  };
};

const SignInConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, login })(SignIn);

export default SignInConnect;