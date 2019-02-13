import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TextInput, Button, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeName, changeEmail, changePassword, register } from '../actions/AuthActions';

import Load from '../components/Load';

class SignUp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        loading:false
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
          Nome
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.name}
          placeholder="Digite seu nome"
          onChangeText={this.props.changeName}
        />
        <Text style={styles.title}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.email}
          placeholder="Digite seu email"
          onChangeText={this.props.changeEmail}
        />
        <Text style={styles.title}>
          Senha
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.password}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          onChangeText={this.props.changePassword}
        />
        <Button
        title="Cadastrar"
        onPress={() => {
          this.setState({loading:true});
          this.props.register(this.props.name, this.props.email, this.props.password, () => {
            this.setState({loading:false});
          });
        }}
        />
        <Load visible={this.state.loading} />
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
    name:state.auth.name,
    email:state.auth.email,
    password:state.auth.password,
    status:state.auth.status
  };
};

const SignUpConnect = connect(mapStateToProps, { checkLogin, changeName, changeEmail, changePassword, register })(SignUp);

export default SignUpConnect;