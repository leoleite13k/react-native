import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class ReceitaModo extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={styles.areaTab}>
				<FlatList 
					data={this.props.screenProps.modo}
					renderItem={({item}) => <Text style={styles.modoItem}> {item.key}º  {item.txt}</Text>}
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
	modoItem:{
		fontSize: 16,
		marginBottom: 10,
	}
	  
});

export default ReceitaModo;
