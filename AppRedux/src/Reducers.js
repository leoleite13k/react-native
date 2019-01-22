import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';

const Reducers = combineReducers({
  AuthReducer:AuthReducer
});

export default Reducers;