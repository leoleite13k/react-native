import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import firebase from 'firebase';

class Firebase extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		nome:'Carregando...'
	  	};
		var config = {
	    	apiKey: "AIzaSyC-6lkzPWBUVlZtzIQ6GhFacKZ57stT8o0",
	    	authDomain: "projeto-teste-b38a7.firebaseapp.com",
		    databaseURL: "https://projeto-teste-b38a7.firebaseio.com",
		    projectId: "projeto-teste-b38a7",
		    storageBucket: "projeto-teste-b38a7.appspot.com",
		    messagingSenderId: "753623237460"
	  	};
	  	firebase.initializeApp(config);

	  	// Utilizando um Listener(Ouvinte):
	  	
	  	firebase.database().ref("usuarios/1/nome").on('value', (snapshot) => {
	  		let state = this.state;
	  		state.nome = snapshot.val();
	  		this.setState(state);
	  	});
	  	
		/*
	  	// Pegando uma única vez:
	  	firebase.database().ref("usuarios/1/nome").once('value').then((snapshot) => {
	  		let state = this.state;
	  		state.nome = snapshot.val();
	  		this.setState(state);
	  	});
	  	*/
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Meu nome é :</Text>
				<Text>{this.state.nome}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: Platform.OS == 'ios' ? 30 : 0,
	}
});


export default Firebase;