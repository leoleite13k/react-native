import React, { Component } from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers      from './src/config/Reducers';
import Preload       from './src/screens/Preload';
import Home          from './src/screens/Home';
import Conversations from './src/screens/Conversations';
import SignIn        from './src/screens/SignIn';
import SignUp        from './src/screens/SignUp';


console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navigator = createStackNavigator({
  Preload:{
    screen:Preload,
    navigationOptions:{
      header:null
    }
  },
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  Conversations:{
    screen:Conversations,
    navigationOptions:{
      header:null
    }
  },
  SignIn:{
    screen:SignIn,
    navigationOptions:{
      title:"Login"
    }
  },
  SignUp:{
    screen:SignUp,
    navigationOptions:{
      title:"Cadastro"
    }
  }
});

const AppContainer = createNavigationContainer(Navigator);

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