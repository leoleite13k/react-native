import {DrawerNavigator} from 'react-navigation';

import ConfigScreenApp from './ConfigScreenApp';
import ConfigScreenProfile from './ConfigScreenProfile';

const Navegador = DrawerNavigator ({
  ConfigScreenApp:{
    screen:ConfigScreenApp
  },
  ConfigScreenProfile:{
    screen:ConfigScreenProfile
  }
});

export default Navegador;