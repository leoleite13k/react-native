import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Lista from './src/Lista.js'
import Receita from './src/Receita.js'

const Navegador = createStackNavigator({
  Lista:{
    screen: Lista,
    navigationOption:{
      title:'App de Receitas'
    }
  },
  Receita:{
    screen: Receita,
    navigationOption:{
      title:'App de Receitas'
    }
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;