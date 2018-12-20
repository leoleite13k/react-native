import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, View, Button, Text, TextInput} from 'react-native';

import ListaItem from './src/ListaItem';

export default class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       lista:[],
       input:''
    };

    fetch('https://b7web.com.br/todo/42272')
      .then((retorno) => retorno.json())
      .then((json) => {
        let state = this.state;
        state.lista = json.todo;
        this.setState(state);
      })

      this.addButton = this.addButton.bind(this);
  }

  addButton() {
    let texto = this.state.input;

    let state = this.state;
    state.input = '';
    this.setState(state);

    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addArea}>
          <Text style={styles.addTxt}>Acione uma nova tarefa</Text>
          <TextInput style={styles.input} onChangeText={(texto) => {
            let state = this.state;
            state.input = texto;
            this.setState(state);
          }} value={this.state.input} />
          <Button title="Adicionar" onPress={this.addButton}/>
        </View>
        <FlatList 
          data={this.state.lista}
          renderItem={({item}) => <ListaItem data={item} />}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 30 : 0
  },
  addArea:{
    marginBottom: 20,
    backgroundColor: '#DDDDDD',
    height: 100
  },
  input:{
    height: 40,
    backgroundColor: '#CCCCCC',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  addTxt:{
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  }
});
