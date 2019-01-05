import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList } from 'react-native';
import firebase from 'firebase';

import Lista from './src/Lista';

class Firebase extends Component {

	constructor(props) {
	    super(props);
	
	    this.state = {
	    	lista:[]
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

		//Atualiza apenas uma vez
		firebase.database().ref('usuarios').once('value', (snapshot) => {
			let state = this.state;
			state.lista = [];

			snapshot.forEach((childItem) => {
				state.lista.push({
					key: childItem.key,
					nome: childItem.val().nome,
					idade: childItem.val().idade
				});
			});

			this.setState(state);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList 
					data={this.state.lista}
					renderItem={({item}) => <Lista data={item} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: Platform.OS == 'ios'? 30 : 0,
	}
});


export default Firebase;