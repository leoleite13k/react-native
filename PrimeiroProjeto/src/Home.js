import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = StackNavigator({
   HomeList:{
       screen:HomeList
   },
   HomeProducts:{
       screen:HomeProducts
   }
});

export default Navegador;