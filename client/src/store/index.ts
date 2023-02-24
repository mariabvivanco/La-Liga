import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import authSaga from './auth/authSaga';

import authReducer from '../store/auth/authSlicer';

const sagaMiddleware = createSagaMiddleware();

//const middleware = [];

const store = configureStore({
  reducer: {
    reducer: combineReducers({ auth: authReducer }),
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(authSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
