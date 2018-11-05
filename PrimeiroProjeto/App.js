import {StackNavigator} from 'react-navigation';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import Tela3 from './src/Tela3';

const Navegador = StackNavigator ({
  Home:{
    screen:Tela1
  },
  Conversa:{
    screen:Tela2
  },
  Config:{
    screen:Tela3
  }
});

export default Navegador;