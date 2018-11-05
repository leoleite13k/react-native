import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Tela1 extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'Tela1'
  });

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Tela 1</Text>
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