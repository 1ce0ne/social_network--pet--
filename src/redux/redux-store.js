import { applyMiddleware, combineReducers, legacy_createStore, compose } from 'redux';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
