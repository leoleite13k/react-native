import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

class Tela2 extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'Tela2'
  });

  constructor(props) {
    super(props);
    this.state = {
      
    }

    this.abrirTela = this.abrirTela.bind(this);
  }

  abrirTela() {
    this.props.navigation.navigate('Tela3');
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Tela 2</Text>
        <Button title='Ir para Tela 3' onPress={this.abrirTela} />
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

  export default Tela2;