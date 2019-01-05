import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class Lista extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.data.nome}, {this.props.data.idade} anos. (Chave: {this.props.data.key})</Text>
			</View>	
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: 10,
	}
});


export default Lista;