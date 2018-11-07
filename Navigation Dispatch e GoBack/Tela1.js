import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

class Tela1 extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'Tela1'
  });

  constructor(props) {
    super(props);
    this.state = {
      
    }

    this.abrirTela = this.abrirTela.bind(this);
  }

  abrirTela() {
    this.props.navigation.navigate('Tela2');
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Tela 1</Text>
        <Button title='Ir para Tela 2' onPress={this.abrirTela} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent:'center',
    alignItems:'center'
  }
});

  export default Tela1;