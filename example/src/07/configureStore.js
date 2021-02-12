import {createStore, combineReducers } from 'redux';
import {composeWithDevTools } from 'redux-devtoools-extension';
import reducers from './reducers';

export default initStates => createStore(
	combineReducers(reducers),
	initStates,
	composeWithDevTools(),
);