import React, { Component } from 'react';
import { createBottomTabNavigator, createNavigationContainer } from 'react-navigation';

import ConversationsStack from './ConversationsStack';
import ContactList        from './ContactList';
import Config             from './Config';

const ConversationsNavigator = createBottomTabNavigator({
  ConversationsStack:{
    screen:ConversationsStack,
    navigationOptions:{
      tabBarLabel:"Conversas",
      header:null,
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
    swipeEnabled:false,
  }
});

ConversationsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const ConversationsAppContainer = createNavigationContainer(ConversationsNavigator);

export default ConversationsAppContainer;