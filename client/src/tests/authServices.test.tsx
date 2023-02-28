//Prueba de que el post del login funciona correctamente

import { postLogin } from '../services/AuthServices';
jest.mock('axios')
//import axios from 'axios'


describe('Pruebas con autorización en axios', () => {
    /*beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve('whatever-get'));
    });*/

    test('debe de regresar el estado inicial y llamarse "auth"', async () => {

        

       // const response = await postLogin({email:'fake.user@fake.con', password:'123'})
       //expect( typeof response.data ).toBe('string');
        //expect( authSlice.name ).toBe('auth');

    });

   
    
});