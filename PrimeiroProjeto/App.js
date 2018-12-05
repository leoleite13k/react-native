import React, {Component} from 'react';
import {createBottomTabNavigator, createNavigationContainer} from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navegador = createBottomTabNavigator({
   Home:{
       screen:Home
   },
    Contato:{
        screen:Contato
    },
    Horarios:{
        screen:Horarios
    },
    Sobre:{
       screen:Sobre
    }
});

const AppContainer = createNavigationContainer(Navegador);
export default AppContainer;