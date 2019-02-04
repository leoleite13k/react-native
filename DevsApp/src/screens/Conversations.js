import React, { Component } from 'react';
import { createBottomTabNavigator, createNavigationContainer } from 'react-navigation';

import ConversationsStack from './ConversationsStack';
import ContactList       from './ContactList';
import Config            from './Config';

const ConversationsNavigator = createBottomTabNavigator({
  ConversationsList:{
    screen:ConversationsStack,
    navigationOptions:{
      tabBarLabel:"Conversas"
    }
  },
  ContactList:{
    screen:ContactList,
    navigationOptions:{
      tabBarLabel:"Contatos"
    }
  },
  Config:{
    screen:Config,
    navigationOptions:{
      tabBarLabel:"Configurações"
    }
  },
},
{
  defaultNavigationOptions:{
    animationsEnabled:false,
    swipeEnabled:false
  }
});

const ConversationsAppContainer = createNavigationContainer(ConversationsNavigator);

export default ConversationsAppContainer;