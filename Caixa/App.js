import React, {Component} from 'react';
import {createStackNavigator, createNavigationContainer} from 'react-navigation';
import Preload from './src/Preload';
import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';
import Caixa from './src/Caixa';
import AddReceita from './src/AddReceita';
import AddDespesa from './src/AddDespesa';

const Navegador = createStackNavigator({
    Preload:{
        screen:Preload,
        navigationOptions:{
            header:null,
        }
    },
    Home:{
        screen:Home,
        navigationOptions:{
            title:null,
            header:null
        }
    },
    Cadastro:{
        screen:Cadastro,
        navigationOptions:{
            title:'Cadastro',
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            title:'Login',
        }
    },
    Caixa:{
        screen:Caixa,
        navigationOptions:{
            title:'Inicio',
            header:null,
        }
    },
    AddReceita:{
        screen:AddReceita,
        navigationOptions:{
            title:'Adicionar Receita',
        }
    },
    AddDespesa:{
        screen:AddDespesa,
        navigationOptions:{
            title:'Adicionar Despesa',
        }
    }
},
{
    defaultNavigationOptions:{
        headerStyle:{
                backgroundColor: '#FFFF00',
        },
        headerTintColor: '#000000',
    }
});

const AppContainer = createNavigationContainer(Navegador);
export default AppContainer;