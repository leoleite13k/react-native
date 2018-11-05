import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

class ConfigScreenProfile extends Component {
  static navigationOptions = ({navigation}) => ({
    drawerLabel:'Configurações do Perfil',
    tabBarLabel:'Configurações',
    tabBarIcon:({tintColor, focused}) => {
      if (focused) {
        return(
          <Image source={require('../assets/images/config_on.png')} style={{width:20, height:20}} />
        );
      } else {
        return(
          <Image source={require('../assets/images/config_off.png')} style={{width:20, height:20}} />
        );
      }
    }
  });
  
  render () {
    return(
      <View style={styles.container}>
        <Text>Tela de Configurações do Perfil</Text>
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

  export default ConfigScreenProfile;