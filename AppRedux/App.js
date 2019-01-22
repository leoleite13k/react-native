import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import Home     from './src/Home';
import Cadastro from './src/Cadastro';
import Login    from './src/Login';

let store  = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  Cadastro:{
    screen:Cadastro,
    navigationOptions:{
      title:"Cadastro"
    }
  },
  Login:{
    screen:Login,
    navigationOptions:{
      title:"Login"
    }
  }
});

const AppContainer = createAppContainer(Navegador);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;