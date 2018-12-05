import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from './src/Home'

const Navegador = createBottomTabNavigator({
   Home:{
       screen: Home
   }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;