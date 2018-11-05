import {TabNavigator} from 'react-navigation';

import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';
import ConfigScreen from './src/ConfigScreen';

const Navegador = TabNavigator ({
  Home:{
    screen:TelaInicial
  },
  Conversa:{
    screen:ConversationScreen
  },
  Config:{
    screen:ConfigScreen
  }
});

export default Navegador;