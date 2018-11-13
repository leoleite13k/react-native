import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Platform,
  ImageBackground,
  FlatList
} from 'react-native';

import MsgItem from './src/MsgItem.js';

class PrimeiroProjeto extends Component {

	constructor(props) {
	 	super(props);
	
	 	this.state = {
	 		chat:[
	 			{key:1, nome:'Leonardo', msg:'Oi, tudo bem ?', m:true},
	 			{key:1, nome:'Daniele', msg:'Opá tudo sime com voce ?', m:false},
	 			{key:1, nome:'Leonardo', msg:'Estou bem tambem...', m:true},
	 			{key:1, nome:'Daniele', msg:'E como vai as coisas, está dando tudo certo ? Estudando muito ?', m:false},
	 			{key:1, nome:'Leonardo', msg:'Está sim estamos indo ne amor', m:true},
	 			{key:1, nome:'Daniele', msg:'Então ok, quando for dormir me liga', m:false},
	 			{key:1, nome:'Leonardo', msg:'Ligo sim amor', m:true},
	 			{key:1, nome:'Daniele', msg:'Pode deixar', m:true},
	 			{key:1, nome:'Leonardo', msg:'Amor ?', m:false}
	 		]
	 	};
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('./assets/images/bg.jpg')} style={styles.bg}>
					<FlatList 
						data={this.state.chat}
						renderItem={({item}) => <MsgItem data={item} /> }
					/>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop: (Platform.OS == 'ios') ? 20 : 0 ,
	},
	bg:{
		flex:1,
	}

});


export default PrimeiroProjeto;