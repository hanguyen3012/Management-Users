import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { legacy_createStore as createStore } from 'redux'
import rootReducers from './rootReducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    return createStore(rootReducers, applyMiddleware(sagaMiddleware));

};

