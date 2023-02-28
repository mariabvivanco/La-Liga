/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
//Test de la página de Login

import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import authReducer from '../store/auth/authSlicer';

import LoginPage from '../pages/LoginPage';


const store = configureStore({
  reducer: { auth: authReducer },
  preloadedState: {
    auth: {
      token: '',
      error: '',
      status: 'not-authenticated',
      email: '',
      password: '',
    },
  },
});

describe('Pruebas en <LoginPage />', () => {
  test('Se renderiza correctamente la página de login', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    );
 
    expect(
      screen.getAllByText('Bienvenido a La Liga').length,
    ).toBeGreaterThanOrEqual(1);
  });
  test('Se renderiza correctamente la página de login', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    );
 
    expect(
      screen.getAllByText('Bienvenido a La Liga').length,
    ).toBeGreaterThanOrEqual(1);
  });
 
})
