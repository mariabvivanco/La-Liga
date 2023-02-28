//Prueba de que todos los  reducer se ejecutan corectamente al ser invocados con casos de prueba

import { authSlice,  logout, loginRequest, loginSuccess, loginFailed } from '../store/auth/authSlicer';
import { authenticatedState, initialState, errorState } from './fixtures/authFixtures';

describe('Pruebas en el authSlice', () => {

    test('debe de regresar el estado inicial y llamarse "auth"', () => {
        const state = authSlice.reducer( initialState, {
            type: undefined
        } );
        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');

    });

    test('debe de realizar la autenticación', () => {
        const state = authSlice.reducer( initialState, loginRequest( {email:'fake.user@fake.com', password:'123'} ) );
        expect( state ).toEqual({
            status: 'pending',
            email: 'fake.user@fake.com',
            password:'123',
            error:'',
            token:''
        });
    });

   test('debe de realizar el logout sin argumentos', () => {
        const state = authSlice.reducer( authenticatedState, logout() );
        expect(state).toEqual(
            initialState
        )
    });

    test('debe actualizar el estado al loguearse correctamente', () => {
        const state = authSlice.reducer( authenticatedState, loginSuccess('12345') );
        expect(state).toEqual(
            authenticatedState
        )
    });

    test('debe volver al estado no logueado con un logueo incorrecto', () => {
        const state = authSlice.reducer( authenticatedState, loginFailed('Usuario incorrecto') );
        expect(state).toEqual(
            errorState
        )
    }); 
    
});