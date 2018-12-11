import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeLista from './HomeLista';
import HomeProduto from './HomeProduto';

const Home = createStackNavigator({
    HomeLista:{
        screen: HomeLista,
        navigationOptions:{
            title:"Restaurante"
        }
    },
    HomeProduto:{
        screen:HomeProduto,
    }
});

const AppContainerHome = createAppContainer(Home);
export default AppContainerHome;