import React, { Component } from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';

import ConversationsList from './ConversationsList';
import InternalConversation from './InternalConversation';

const ConversationsStackNavigator = createStackNavigator({
  ConversationsList:{
    screen:ConversationsList,
    navigationOptions:{
      title:"Conversas"
    }
  },
  InternalConversation:{
    screen:InternalConversation,
    navigationOptions:{
      title:"Conversas"
    }
  },
});

const ConversationsStackAppContainer = createNavigationContainer(ConversationsStackNavigator);

export default ConversationsStackAppContainer;