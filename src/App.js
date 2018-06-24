import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Stack from './navigation/Stack';
import { store, persistor } from './store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Stack />
        </PersistGate>
      </Provider>
    );
  }
}
