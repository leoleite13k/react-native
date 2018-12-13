import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native';

import ReceitaTab from './ReceitaTab';

export default class Receita extends Component {
  constructor(props) {
    	super(props);
    	this.state = {};
  }

  render() {
    return (
      	<View style={styles.container}>
        	<TouchableHighlight underlayColor='#CCCCCC' onPress={() => this.props.navigation.goBack()} style={styles.backButtom} >
				<Image source={require('../assets/images/back.png')} style={styles.backImagem} />
			</TouchableHighlight>
			<Image source={{uri:this.props.navigation.state.params.imagem}} style={styles.receitaImagem}/>
			<ReceitaTab />
      	</View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
		flex: 1,
		backgroundColor:'#CCCCCC',
		marginTop: 20
	},
	backImagem:{
		width: 26,
		height: 26,
	},
	backButtom:{
		width: 26,
		height: 26,
		marginLeft: 10,
		marginTop: 5,
		zIndex: 99
	},
	receitaImagem:{
		height: 200,
		marginTop: -51
	}
});