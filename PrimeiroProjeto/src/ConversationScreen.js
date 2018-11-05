import {StackNavigator} from 'react-navigation';

import ConversationScreenList from './ConversationScreenList'
import ConversationScreenChat from './ConversationScreenChat'

const Navegador = StackNavigator ({
  ConversationScreenList:{
    screen:ConversationScreenList
  },
  ConversationScreenChat:{
    screen:ConversationScreenChat
  }
});

export default Navegador;