import React, { Component } from 'react';
import {View, Text, StyleSheet, Platform, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class Tela1 extends Component {
	static navigationOptions = {
		title:'Tela 1',
		header:null,
		headerBackTitle:null
		// Retirar o Header = header:null
		// Retirar o Titulo = headerBackTitle:null
		// Inserir o Texto no botao voltar = HeaderTruncatedBackTitle:'Nome'
		// Inserir algo no cabeçalho do lado Direito = HeaderRight: (XCria a const como funcao e executa ela aqui no onPress)
		// Stylizar o Header = headerStyle:{}
		// Mudar a cor do texto = headerTintColor:''
		// Mudar Stylo do titile = headerTitleStyle:{}
		// Mudar Stylo no back = headerBackTitleStyle:{}
	}

	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	render() {
		return(
			<View style={styles.container}>
				<Text>Tela 1</Text>
				<Button title='Ir para Tela 2' onPress={() => this.props.navigation.navigate('Tela2')} />
			</View>
		);
	}
}

class Tela2 extends Component {
	static navigationOptions = {
		title:'Tela 2',
		headerStyle:{
			backgroundColor: '#000000',
		},
		headerTintColor:'#FFFFFF',
		headerBackTintColor:'#FFFFFF'
	}

	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	render() {
		return(
			<View style={styles.container}>
				<Text>Tela 2</Text>
				<Button title='Ir para Tela 1' onPress={() => this.props.navigation.goBack()} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:20,
		backgroundColor: '#FFCC00',
	},
});

const Navegador = StackNavigator ({
	Tela1:{
		screen:Tela1
	},
	Tela2:{
		screen:Tela2
	}
},
{
	//headerMode: float(somente o cabeçalho), screen(a tela toda) e none
	headerMode:'float'
});

export default Navegador;