import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger];

middleware.push(sagaMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
