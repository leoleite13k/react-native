import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

class ReceitaItem extends Component {
	constructor(props) {
		super(props);
	
		  this.state = {};
		  this.clicou = this.clicou.bind(this);
	}

	clicou() {
		this.props.navigation.navigate('Receita', {data:this.props.data});
	}

	render() {
		return (
			<TouchableHighlight underlayColor='#CCCCCC' onPress={this.clicou} >
				<View style={styles.area}>
				<Image resizeMode='contain' source={{uri:this.props.data.imagem}} style={styles.imagem}/>				
					<View style={styles.areaInfo}>
						<Text style={styles.nome}>{this.props.data.nome}</Text>
						<Text style={styles.info}>{this.props.data.rendimento} Porções - {this.props.data.preparo}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
    area:{
		flex: 1,
		flexDirection: 'row', 
        height: 80,
		borderBottomWidth: 1,
		borderColor: '#CCCCCC',       
	},
	imagem:{
		width: 100,
		height: 70,
		marginTop: 5,
		marginLeft: 10,
	},
	areaInfo:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
	nome:{
		fontSize: 14,
		fontWeight: 'bold',
	},
	info:{
		color: '#999999'
	}
});


export default ReceitaItem;