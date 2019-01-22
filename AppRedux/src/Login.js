import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { editEmail, editPassword } from './actions/AuthActions';

export class Login extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };

      this.login = this.login.bind(this);
  }

  login() {

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.email}
          placeholder="Email"
          style={styles.input}
          onChangeText={(email) => this.props.editEmail(email)}
        />
        <TextInput
          value={this.props.senha}
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(senha) => this.props.editPassword(senha)}
        />
        <View style={styles.button}>
          <Button
            title="Entar"
            onPress={this.login}
          />
        </View>
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
    borderWidth: 1,
    borderColor: '#5B5858',
    borderStyle: 'solid',
    marginTop: 5,
    padding: 10,
  },
  button:{
    marginTop: 10,
  }
});

const mapStateToProps = (state) => {
  return {
    nome:state.AuthReducer.nome,
    email:state.AuthReducer.email,
    senha:state.AuthReducer.senha
  };
};

const LoginConnect = connect(mapStateToProps, { editEmail, editPassword })(Login);

export default LoginConnect;