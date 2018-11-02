import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

class TelaInicial extends Component {
    static navigationOptions = ({navigation}) => ({title:'Chat'});
  
    constructor(props) {
      super(props);
      this.state = {
        nome:''
      }
  
      this.conversar = this.conversar.bind(this);
    }
  
    conversar() {
      this.props.navigation.navigate('Conversa',{
        nome:this.state.nome
      });
    }
  
    render() {
      return(
        <View>
          <Text>Tela Inicial</Text>
          <TextInput style={{height:40, width:200, borderWidth:1, borderColor:'#000000'}} placeholder='Qual e o seu nome ?' onChangeText={(nome) => this.setState({nome})} />
          <Button title='Conversar' onPress={this.conversar} />
        </View>
      );
    }
  }

  export default TelaInicial;