import React from 'react';
import {Provider} from 'react-redux';

import {store} from '@redux';
import {Routes} from '@routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
