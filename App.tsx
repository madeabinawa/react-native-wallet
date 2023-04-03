import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@redux';
import { Routes } from '@routes';
import { Splash } from '@screens';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
