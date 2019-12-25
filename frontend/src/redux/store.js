import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-sagas';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger];

middleware.push(sagaMiddleware)

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
