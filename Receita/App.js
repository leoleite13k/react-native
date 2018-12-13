import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Lista from './src/Lista.js'
import Receita from './src/Receita.js'

const Navegador = createStackNavigator({
	Lista:{
    	screen: Lista,
    	navigationOptions:{
      		title:'App de Receitas'
    	}
	},
	Receita:{
    	screen: Receita,
    	navigationOptions:{
    	header:null
    	}
  	}
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;