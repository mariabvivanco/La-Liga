import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import authSaga from './auth/authSaga';

import authReducer from '../store/auth/authSlicer';
import clubsReducer from '../store/clubs/clubsSlicer'
import clubsSaga from './clubs/clubsSaga';

const sagaMiddleware = createSagaMiddleware();

//const middleware = [];

const store = configureStore({
  reducer: {
    reducer: combineReducers({ auth: authReducer, clubs: clubsReducer }),
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(authSaga);
sagaMiddleware.run(clubsSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
