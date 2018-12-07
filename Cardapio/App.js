import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home     from './src/Home'
import Horario  from './src/Horario'
import Contato  from './src/Contato'
import Sobre    from './src/Sobre'
import {Image, StyleSheet} from "react-native";

const Navegador = createBottomTabNavigator({
   Home:{
       screen: Home
   },
   Horario:{
       screen: Horario
   },
   Contato:{
       screen:Contato
   },
    Sobre:{
       screen: Sobre
   }
},
{
    defaultNavigationOptions: {
        tabBarIcon:({ focused, tintColor }) => {
            if (focused) {
                return (
                    <Image source={require('./assets/images/home_azul.png')} style={styles.icon} />
                );
            }else {
                return (
                    <Image source={require('./assets/images/home_preto.png')} style={styles.icon} />
                );
            }
        }

    }
});

const styles = StyleSheet.create({
    icon:{
        width: 26,
        height: 26
    }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;