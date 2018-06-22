import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import reduxLogger from 'redux-logger';
import Stack from './navigation/Stack';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, reduxLogger),
);

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
}
