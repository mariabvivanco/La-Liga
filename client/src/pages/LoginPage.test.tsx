//Test de la página de Login 

import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import authReducer from '../store/auth/authSlicer';


  import LoginPage from './LoginPage';
 


  const store = configureStore({
   
      reducer: { auth: authReducer},
    preloadedState: {
  auth: {
    token: '',
    error: '',
    status: 'idle',
    email: '',
    password: ''}
  }})
 

      describe('Pruebas en <LoginPage />', () => {

           
    
        test('debe de mostrar el componente correctamente', () => {
            
            render(
                <Provider store={ store }>
                    <MemoryRouter>
                        <LoginPage />
                    </MemoryRouter>
                </Provider>
            );
    
            // screen.debug()
            expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
    
    
        });
    
    
     
    
    
    
        
    });
    
  



