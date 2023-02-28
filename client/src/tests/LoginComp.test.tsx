/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-labels */
//Test del Componente que contiene el formulario de login

import { render, screen, fireEvent } from '@testing-library/react';
import LoginComp from '../components/login/LoginComp';

//Chequeo de renderizado y algunos comportamientos funcionales del Formulario Login

describe('Correcto renderizado inicial del login y algunas funcionalidades', () => {
  test('Si entra por primera vez al formulario se renderiza correctamente', () => {
    render(
      <LoginComp
        setEmailLogin={(): void=> {
          throw new Error('Function not implemented.');
        }}
        setPasswordLogin={(): void=> {
          throw new Error('Function not implemented.');
        }}
        setChange={(): void=> {
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

  test('Cuando no se introduce valor en email o password aparecen mensajes de error', () => {
    render(
      <LoginComp
        setEmailLogin={(): void=> {
          const emailLogin = '';
        }}
        setPasswordLogin={(): void=> {
          const passwordLogin = '';
        }}
        setChange={(): void=> {
          const change = true;
        }}
        change={false}
        isLoading={false}
      />,
    );

    const sendBtn = screen.getByTestId('send');
    fireEvent.click(sendBtn);

    expect(screen.getByTestId('error-email')).toBeInTheDocument();
    expect(screen.getByTestId('error-password')).toBeInTheDocument();
  });
});
