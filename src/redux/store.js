import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    return createStore(rootReducers, applyMiddleware(sagaMiddleware));

};

