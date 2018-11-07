import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

class Tela3 extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'Tela3'
  });

  constructor(props) {
    super(props);
    this.state = {
      
    }

    this.voltarTela = this.voltarTela.bind(this);
  }

  voltarTela() {
    //this.props.navigation.goBack();

    this.props.navigation.dispatch(NavigationActions.reset({
      index:0,
      actions:[
        NavigationActions.navigate({routeName:'Tela1'})
      ]
    }));
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Tela 3</Text>
        <Button title='Voltar' onPress={this.voltarTela} />
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

  export default Tela3;