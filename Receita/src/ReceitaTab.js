import React from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import ReceitaResumo        from './ReceitaResumo';
import ReceitaIngredientes  from './ReceitaIngredientes';
import ReceitaModo          from './ReceitaModo';


const Abas = createMaterialTopTabNavigator({
    ReceitaResumo:{
        screen:ReceitaResumo,
        navigationOptions:{
            tabBarLabel:'Resumo'
        }
    },
    ReceitaIngredientes:{
        screen:ReceitaIngredientes,
        navigationOptions:{
            tabBarLabel:'Ingredientes'
        }
    },
    ReceitaModo:{
        screen:ReceitaModo,
        navigationOptions:{
            tabBarLabel:'Modo'
        }
    }
},
{   
    tabBarOptions: {
        upperCaseLabel: false,
        labelStyle: {
          fontSize: 15,
          color: '#000000',
          fontWeight: 'bold'
        },
        style: {
            backgroundColor: '#CCCCCC',
        },
        indicatorStyle:{
            backgroundColor: '#000000',
        }
    }    
});

const AppContainer = createAppContainer(Abas);
export default AppContainer;