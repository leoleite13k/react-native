import React, { Component } from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';

import InternalConversation from './InternalConversation';

const ConversationsStackNavigator = createStackNavigator({
  InternalConversation:{
    screen:InternalConversation,
    navigationOptions:{
      title:"Conversas"
    }
  },
});

const ConversationsStackAppContainer = createNavigationContainer(ConversationsStackNavigator);

export default ConversationsStackAppContainer;