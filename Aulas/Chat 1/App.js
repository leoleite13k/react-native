import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Platform,
  FlatList
} from 'react-native';

import ListItem from './src/ListItem.js'

class PrimeiroProjeto extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[
	  		{key:'1', img:'http://chittagongit.com//images/icon-avatars/icon-avatars-20.jpg', nome:'Barbudao Miller', msg:'Minha barba é gigante Minha barba é gigante Minha barba é gigante' },
	  		{key:'2', img:'http://chittagongit.com//images/icon-avatars/icon-avatars-12.jpg', nome:'Marcia Luiza', msg:'Oi' },
	  		{key:'3', img:'http://chittagongit.com//images/avatar-icon-images/avatar-icon-images-4.jpg', nome:'Luiz Antonio', msg:'Tudo Ok' },
	  		{key:'4', img:'http://chittagongit.com//images/avatar-icon-images/avatar-icon-images-4.jpg', nome:'Carlos Cadu', msg:'Gay' },
	  		{key:'5', img:'http://chittagongit.com//images/icon-avatars/icon-avatars-20.jpg', nome:'Leonardo Leite', msg:'Suavidade' },
	  		{key:'6', img:'http://chittagongit.com//images/icon-avatars/icon-avatars-12.jpg', nome:'Barbara Leitão', msg:'Aff...' },
	  	]
	  };
	}

  render() {
    	return (
    		<View style={styles.container}>
    			<FlatList 
    				data={this.state.list}
    				renderItem={({item}) => <ListItem data={item} />}
    			/>
      		</View>
    	);
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop: (Platform.OS == 'ios') ? 20 : 0,
	}
	
});


export default PrimeiroProjeto;