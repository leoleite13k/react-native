import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ReceitaResmo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      	<View style={styles.areaTab}>
        	<Text style={styles.nome}>{this.props.screenProps.nome}</Text>
			<Text style={styles.por}>Por: {this.props.screenProps.por}</Text>
			<Text style={styles.descricao}>{this.props.screenProps.descricao}</Text>
      	</View>
    );
  }
}

const styles = StyleSheet.create({
	areaTab:{
		flex:1,
		margin:10
	},
	nome:{
		fontSize: 26
	},
	por:{
		color:'#F9B965'
	},
	descricao:{
		fontSize: 15
	}
});

export default ReceitaResmo;
