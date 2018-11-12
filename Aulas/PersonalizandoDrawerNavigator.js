import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

class Tela1 extends Component {
	static navigationOptions = {
		drawerLabel:'Tela 1',
		drawerIcon:() => (
			<Image source={require('./assets/images/home_on.png')} style={styles.icon} />
		)
	}

	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	render() {
		return(
			<View style={styles.container}>
				<Text>Tela 1</Text>
			</View>
		);
	}
}

class Tela2 extends Component {
	static navigationOptions = {
		drawerLabel:'Tela 2',
		drawerIcon:() => (
			<Image source={require('./assets/images/chat_on.png')} style={styles.icon} />
		)
	}

	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	render() {
		return(
			<View style={styles.container}>
				<Text>Tela 2</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:20
	},
	icon:{
		width: 26,
		height: 26,

	},
});

const Navegador = DrawerNavigator ({
	Tela1:{
		screen:Tela1
	},
	Tela2:{
		screen:Tela2
	}
},
{
	drawerPosition:'left',
	drawerWidth:150,
	drawerBackgroundColor:'#FFFF00',
	contentOptions:{
		activeTintColor:'#FFFFFF',
		inactiveTintColor:'#000000',
		activeBackgroundColor:'#FF5500',
		itemsContainerStyle:{
			marginTop: 100
		},
		itemStyle:{

		},
		iconConatinerStyle:{
			backgroundColor: '#000000'
		}
	}
});

export default Navegador;