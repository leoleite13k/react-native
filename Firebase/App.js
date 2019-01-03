import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, TextInput, Button } from 'react-native';
import firebase from 'firebase';

class Firebase extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		nomeInput:'',
	  		idadeInput:''
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

	  	this.inserirUsuario = this.inserirUsuario.bind(this);
	  	this.limpar = this.limpar.bind(this);
	}

	inserirUsuario() {
		if ((this.state.nomeInput.length <= 0) && (this.state.idadeInput.length <= 0)) {
			alert("Nome e Idade não inserido !");
		} else if (this.state.nomeInput.length <= 0) {
			alert("Nome não inserido !");
		} else if (this.state.idadeInput.length <= 0) {
			alert("Idade não inserido !");
		} else {
			let usuarios = firebase.database().ref('usuarios');
			let chave = usuarios.push().key;

			usuarios.child(chave).set({
				nome:this.state.nomeInput,
				idade:this.state.idadeInput
			});

			alert("Usuário cadastrado !");
		}
		this.limpar();		
	};

	limpar() {
		let state = this.state;
		state.nomeInput = '';
		state.idadeInput = '';
		this.setState(state);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.texto}>Nome do usuário</Text>
				<TextInput style={styles.input} onChangeText={(nomeInput) => this.setState({nomeInput})} />
				<Text style={styles.texto}>Idade</Text>
				<TextInput style={styles.input} onChangeText={(idadeInput) => this.setState({idadeInput})} />

				<Button title="Inserir usuário" onPress={this.inserirUsuario} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: Platform.OS == 'ios' ? 30 : 0,
	},
	input:{
		borderWidth: 1,
		borderColor: '#000000',
		borderStyle: 'solid',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		padding: 10,
	},
	texto:{
		marginLeft: 10,
		marginTop: 10,
	}
});


export default Firebase;