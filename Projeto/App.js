import React from 'react';
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
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;