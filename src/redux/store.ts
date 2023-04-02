import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import {reducer} from './reducers';
import {rootSaga} from './sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
