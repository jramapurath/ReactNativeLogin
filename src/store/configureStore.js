import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
    console.log('configuring store...')
	return createStore(
			rootReducer,
			initialState,
			applyMiddleware(reduxImmutableStateInvariant())
		);
}