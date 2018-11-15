import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class MsgItem extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};

	  this.estilo = styles.balaoEsquerda;
	  if (this.props.data.m) {
	  	this.estilo = styles.balaoDireita;
	  }
	}

	render() {
		return (
			<View style={[styles.balao, this.estilo]}>
				<Text style={styles.nome}>{this.props.data.nome}</Text>
				<Text>{this.props.data.msg}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	balao:{
		margin: 10,
		padding: 10,
		borderRadius:10
	},
	balaoEsquerda:{
		backgroundColor: '#FFFFFF',
		alignSelf: 'flex-start',
		marginRight: 50,
	},
	balaoDireita:{
		backgroundColor: '#00FF00',
		alignSelf: 'flex-end',
		marginLeft: 50,
	},
	nome:{
		fontSize: 15,
		fontWeight: 'bold',
	}

});


export default MsgItem;