import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeList from './HomeList';
import HomeProduct from "./HomeProduct";

const Home = createStackNavigator({
    HomeList:{
        screen: HomeList
    },
    HomeProduct:{
        screen:HomeProduct
    }
},
{
    defaultNavigationOptions:{
        title:"Home"
    },
});

const AppContainerHome = createAppContainer(Home);
export default AppContainerHome;