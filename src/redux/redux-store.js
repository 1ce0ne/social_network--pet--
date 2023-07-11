import {combineReducers, legacy_createStore} from 'redux';
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer
});

let store = legacy_createStore(reducers);

export default store;