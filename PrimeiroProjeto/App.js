import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default class PrimeiroProjeto extends Component {

//Função 
  somar(n1,n2) {
    return n1+n2;
  }

  //Função anonima
  //(parametros) => {o que vai fazer}

  render() {

    // Usar o let para criar variaveis locais e var para todo o projeto
    let nome = "Leonardo";
    let imagem = {
      uri:'https://abrilsuperinteressante.files.wordpress.com/2018/07/565dcdfe0e2163330400bf82albert-einstein-2071-hd-wallpapers.jpeg'
    };

    return(
      <View>
        <Text style={ styles.texto }>A soma de 2 + 2 é : {this.somar(2,2)}</Text>
        <Text style={{fontSize: 25, color: 'red', margin: 20}}>Olá Mundo !</Text>

        <Button title="Aperte Aqui" onPress={ () => { alert("Apertou !!!") }}/>
        <Image source={imagem} style={{width:300, height:300}} />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    fontSize:30
  }
})
