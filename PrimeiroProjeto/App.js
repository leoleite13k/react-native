import {StackNavigator} from 'react-navigation';
import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';

const Navegador = StackNavigator ({
  Home:{
    screen:TelaInicial
  },
  Conversa:{
    screen:ConversationScreen
  }
});

export default Navegador;