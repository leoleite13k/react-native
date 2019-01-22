import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.login     = this.login.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  login() {
    this.props.navigation.navigate('Login')
  }

  cadastrar() {
    this.props.navigation.navigate('Cadastro')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cabecalho}>
          Tela Inicial
        </Text>
        <TouchableHighlight
          onPress={this.login}
          style={styles.button}
          underlayColor='#5B5858'>
          <View style={styles.tButton}>
            <Text style={styles.texto}>
              Login
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.cadastrar}
          style={styles.button}
          underlayColor='#5B5858'>
          <View style={styles.tButton}>
            <Text style={styles.texto}>
              Cadastrar
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: Platform.OS == 'ios'? 30 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cabecalho:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tButton:{
    alignItems: 'center',
    fontWeight: 'bold',
  },
  button:{
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
    backgroundColor: '#CCCCCC',
    height: 40,
    width: 250,
  }
});

export default Home;