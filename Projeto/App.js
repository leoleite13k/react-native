import React, {Component}   from 'react';
import { Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home      from './src/Home';
import Contact   from './src/Contact';
import Schedules from './src/Schedules';
import Info      from './src/Info';


const Navegador = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Contact: {
        screen: Contact
    },
    Schedules: {
        screen: Schedules
    },
    Info: {
        screen: Info
    },
},
{
    defaultNavigationOptions:{
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                  <Image source={require('./assets/images/')} style={styles.icon} /> // Inserir dinamico
                );
            }
        }
    }
});

const styles = StyleSheet.create({
   icon:{
       width: 26,
       height: 26,
   }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;