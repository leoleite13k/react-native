import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Platform } from 'react-native'

import Filme from './src/Filme'

export class Projeto extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 filmes:[],
			 loading:true
		};

		fetch('https://filmespy.herokuapp.com/api/v1/filmes')
			.then((retorno) => retorno.json())
			.then((json) => {
				let state = this.state;
				state.filmes = json.filmes;
				state.loading = false;
				this.setState(state);
			});
	}
	
  render() {
		if (this.state.loading) {
			return (
				<View style={[styles.container, styles.loading]}>
					<Text style={styles.loadingTxt}>Carregando...</Text>
				</View>
			);
		} else {
    	return (
				<View style={styles.container}>
					<FlatList 
						data={this.state.filmes}
						renderItem={({item}) => <Filme data={item} />}
						keyExtractor={(item, index) => item.titulo}
					/>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
  container:{
		flex: 1,
		marginTop: Platform.OS == 'ios' ? 30 : 0
	},
	loading:{
		justifyContent:'center',
		alignItems:'center',
	},
	loadingTxt:{
		fontSize: 18,
		fontWeight:'bold'
	}
})

export default Projeto