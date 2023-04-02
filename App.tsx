import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from '@redux';
import {Routes} from '@routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text className="text-white">Loading</Text>}
        persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
