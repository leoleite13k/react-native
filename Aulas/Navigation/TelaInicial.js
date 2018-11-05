import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class TelaInicial extends Component {
  static navigationOptions = ({navigation}) => ({
    tabBarLabel:'Inicial',
    tabBarIcon:({tintColor, focused}) => {
      if (focused) {
        return(
          <Image source={require('../assets/images/home_on.png')} style={{width:20, height:20}} />
        );
      } else {
        return(
          <Image source={require('../assets/images/home_off.png')} style={{width:20, height:20}} />
        );
      }
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Tela Inicial</Text>
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

  export default TelaInicial;