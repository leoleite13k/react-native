import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Tela2 extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'Tela2'
  });

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Tela 2</Text>
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