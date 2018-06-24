import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, reduxLogger];

export const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
