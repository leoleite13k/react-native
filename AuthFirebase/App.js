import React, {Component} from 'react';
import {createStackNavigator, createNavigationContainer} from 'react-navigation';
import Login from './src/Login';
import Home from './src/Home';

const Navegador = createStackNavigator({
   Login:{
        screen:Login,
        navigationOptions:{
            title:'Login'
        }

   },
    Home:{
        screen:Home,
        navigationOptions:{
            header:null
        }
    },
});

const AppContainer = createNavigationContainer(Navegador);
export default AppContainer;