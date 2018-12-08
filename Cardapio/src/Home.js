import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeLista from './HomeLista';
import HomeProduto from "./HomeProduto";

const Home = createStackNavigator({
    HomeList:{
        screen: HomeLista,
        navigationOptions:{
            title:"Restaurante"
        }
    },
    HomeProduct:{
        screen:HomeProduto,
        navigationOptions:{
            title:"Produtos"
        }
    }
},
{
    defaultNavigationOptions:{
        title:"Home"
    },
});

const AppContainerHome = createAppContainer(Home);
export default AppContainerHome;