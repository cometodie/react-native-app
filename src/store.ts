import { createStore, applyMiddleware } from 'redux';
import rootReducer, { State } from './reducers';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootSaga from './saga/rootSaga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const sagaMiddleware = createSagaMiddleware();
const navigation = createReactNavigationReduxMiddleware(
  'root',
  (state: State) => state.nav,
);

const middleware = [sagaMiddleware, reduxLogger, navigation];

export const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
