import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

class ConversationScreenList extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'Conversa',
    tabBarLabel:'Chat',
    tabBarIcon:({tintColor, focused}) => {
      if (focused) {
        return(
          <Image source={require('../assets/images/chat_on.png')} style={{width:20, height:20}} />
        );
      } else {
        return(
          <Image source={require('../assets/images/chat_off.png')} style={{width:20, height:20}} />
        );
      }
    }
  });
  
  render () {
    return(
      <View style={styles.container}>
        <Text>Tela de Conversa</Text>
        <Button title='Paulo' onPress={() => this.props.navigation.navigate('ConversationScreenChat', {nome:'Paulo'})} />
        <Button title='João'  onPress={() => this.props.navigation.navigate('ConversationScreenChat', {nome:'João'})} />
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

  export default ConversationScreenList;