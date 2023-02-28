//Slicer para la autorización

import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '..';
export interface IAuthState {
  token: string;
  error: string;
  status: 'pending' | 'error' | 'not-authenticated' | 'authenticated';
  email: string;
  password: string;
}

export const initialState: IAuthState = {
  token: '',
  error: '',
  status: 'not-authenticated',
  email: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = '';
      state.status = 'pending';
    },

    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.status = 'authenticated';
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
      state.token = '';
      state.email= '';
      state.password= '';
    },
    logout: (state) => {
      state.status = 'not-authenticated';
      state.token = '';
      state.email= '';
      state.password= '';
      state.error=''
    },
  },
});

export const token = (state: RootState) => state.reducer.auth.token;
export const email = (state: RootState) => state.reducer.auth.email;
export const status = (state: RootState) => state.reducer?.auth?.status;
export const password = (state: RootState) => state.reducer.auth.password;
export const { loginSuccess, loginFailed, logout, loginRequest } =  authSlice.actions;

export default authSlice.reducer;
