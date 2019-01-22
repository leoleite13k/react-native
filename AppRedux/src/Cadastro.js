import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { editEmail, editPassword, editNome, cadastrar } from './actions/AuthActions';

export class Cadastro extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.nome}
          placeholder="Nome"
          style={styles.input}
          onChangeText={(nome) => this.props.editNome(nome)}
        />
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
            title="Cadastrar"
            onPress={() => {this.props.cadastrar(this.props.nome, this.props.email, this.props.senha)}}
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

const CadastroConnect = connect(mapStateToProps, { editEmail, editPassword, editNome, cadastrar })(Cadastro);

export default CadastroConnect;