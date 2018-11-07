import {StackNavigator} from 'react-navigation';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import Tela3 from './src/Tela3';

const Navegador = StackNavigator ({
  Tela1:{
    screen:Tela1
  },
  Tela2:{
    screen:Tela2
  },
  Tela3:{
    screen:Tela3
  }
});

export default Navegador;