import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navegador = TabNavigator({
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
}, {
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true
    }
});

export default Navegador;