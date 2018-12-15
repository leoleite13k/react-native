import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Platform } from 'react-native'

import Filme from './src/Filme'

export class Projeto extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 filmes:[]
		};

		fetch('https://filmespy.herokuapp.com/api/v1/filmes')
			.then((retorno) => retorno.json())
			.then((json) => {
				let state = this.state;
				state.filmes = json.filmes;
				this.setState(state);
			});
	}
	

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
					data={this.state.filmes}
					renderItem={({item}) => <Filme data={item} />}
				/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
		flex: 1,
		marginTop: Platform.OS == 'ios' ? 20 : 0
  }
})

export default Projeto