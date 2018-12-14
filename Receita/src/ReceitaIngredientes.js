import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class ReceitaIngredientes extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    	};
  	}

  	render() {
    	return (
			<View style={styles.areaTab}>
				<FlatList 
					data={this.props.screenProps.ingredientes}
					renderItem={({item}) => <Text style={styles.ingItem}> - {item.txt}</Text>}
				/>
			</View>
    	);
  	}
}

const styles = StyleSheet.create({
  	areaTab:{
		flex:1,
		margin:10
	},
	ingItem:{
		fontSize: 16,
		marginBottom: 10,
	}
});

export default ReceitaIngredientes;
