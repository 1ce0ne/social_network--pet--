import {combineReducers, legacy_createStore} from 'redux';
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;