import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import authSaga from './auth/authSaga';

import authReducer from '../store/auth/authSlicer';
import clubsReducer from '../store/clubs/clubsSlicer'
import clubdetReducer from '../store/clubdet/clubdetSlicer'
import clubsSaga from './clubs/clubsSaga';
import clubdetSaga from './clubdet/clubdetSaga';

const sagaMiddleware = createSagaMiddleware();

//const middleware = [];

const store = configureStore({
  reducer: {
    reducer: combineReducers({ auth: authReducer, clubs: clubsReducer, clubdet: clubdetReducer}),
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(authSaga);
sagaMiddleware.run(clubsSaga);
sagaMiddleware.run(clubdetSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
