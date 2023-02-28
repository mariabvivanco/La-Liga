import { IAuthState } from "../../store/auth/authSlicer";

export const initialState:IAuthState  = {
    token: '',
    error: '',
    status: 'not-authenticated',
    email: '',
    password: '',
  };

  export const errorState:IAuthState  = {
    token: '',
    error: 'Usuario incorrecto',
    status: 'error',
    email: '',
    password: '',
  };

export const notAuthenticatedState:IAuthState = {
    token: '',
    error: '',
    status: 'not-authenticated',
    email: '',
    password: '',
  };

export const authenticatedState:IAuthState = {
    token: '12345',
    error: '',
    status: 'authenticated',
    email: 'fake.user@fake.com',
    password: '123',
  };

  export const requestState:IAuthState = {
    error: '',
    token:'',
    status: 'pending',
    email: 'fake.user@fake.com',
    password: '123',
  };
