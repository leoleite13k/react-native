import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ConversationScreen extends Component {
    static navigationOptions = ({navigation}) => ({title:navigation.state.params.nome});
  
    render () {
      return(
        <View>
          <Text>Tela de Conversa</Text>
        </View>
      );
    }
  }

  export default ConversationScreen;