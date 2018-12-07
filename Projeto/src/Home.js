import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import HomeList from './HomeList';

const Navegador = createStackNavigator({
    HomeList: {
        screen: HomeList
    },
});

const Home = createAppContainer(Navegador);
export default Home;