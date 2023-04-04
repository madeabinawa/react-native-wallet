import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import {persistedReducer} from './persist';
import {rootSaga} from './sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
});

export const persistor = persistStore(store);

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
