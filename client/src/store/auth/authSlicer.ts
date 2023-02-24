import { createSlice} from '@reduxjs/toolkit';


import { RootState } from '..';

interface IAuthState {
  token: string;
  error: string;
  status: 'pending' | 'loading' | 'idle' | 'success';
  email: string;
  password: string;
}

const initialState: IAuthState = {
  token: '',
  error: '',
  status: 'idle',
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
      state.status = 'success';
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
      state.status = 'idle';
      state.token = '';
    },
    logout: (state) => {
      state.status = 'idle';
      state.token = '';
    },
  },
});

export const token = (state: RootState) => state.reducer.auth.token;
export const email = (state: RootState) => state.reducer.auth.email;
export const password = (state: RootState) => state.reducer.auth.password;

export const { loginSuccess, loginFailed, logout, loginRequest } =
  authSlice.actions;
export default authSlice.reducer;
