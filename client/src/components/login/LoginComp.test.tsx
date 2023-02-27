/* eslint-disable no-unused-labels */
//Test del Componente que contiene el formulario de login

import {
  render,
  screen,
  fireEvent,
  
} from '@testing-library/react';
import LoginComp from './LoginComp';

//Chequeo de renderizado correcto inicial

describe('Comportamiento inicial del login', () => {
  it('se entra por primera vez al login', () => {
    render(
      <LoginComp
        setEmailLogin={function (a: string): void {
          throw new Error('Function not implemented.');
        }}
        setPasswordLogin={function (a: string): void {
          throw new Error('Function not implemented.');
        }}
        setChange={function (a: boolean): void {
          throw new Error('Function not implemented.');
        }}
        change={false}
        isLoading={false}
      />,
    );

    expect(
      screen.getByText(/Por favor introduzca su correo electrónico/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Por favor introduzca su contraseña/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Usuario correo electrónico/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  
});