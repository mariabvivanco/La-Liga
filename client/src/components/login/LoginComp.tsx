//Formulario del login

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

export interface LoginProps {
  setEmailLogin: (a: string) => void;
  setPasswordLogin: (a: string) => void;
  setChange: (a: boolean) => void;
  change:boolean;
  isLoading: boolean;
}

const LoginComp: React.FC<LoginProps> = ({
  setEmailLogin,
  setPasswordLogin,
  setChange,
  change,
  isLoading,
}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  const handleEmailChange = (e: any) => {
    setIsErrorEmail(false);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setIsErrorPassword(false);
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    setIsErrorEmail(email === '');
    setIsErrorPassword(password === '');
    if (!isErrorEmail && !isErrorPassword) {
      setChange(!change)
      setEmailLogin(email);
      setPasswordLogin(password);
    }
  };

  return (
    <Box>
      <FormControl isInvalid={isErrorEmail} mt={10}>
        <FormLabel>Usuario correo electrónico</FormLabel>
        <Input type="email" value={email} onChange={handleEmailChange} />
        {email === '' && !isErrorEmail ? (
          <FormHelperText>
            Por favor introduzca su correo electrónico
          </FormHelperText>
        ) : (
          isErrorEmail && (
            <FormErrorMessage data-testid="error-email">
              El correo electrónico es requerido.
            </FormErrorMessage>
          )
        )}
      </FormControl>
      <FormControl isInvalid={isErrorPassword} mt={10}>
        <FormLabel>Contraseña</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          data-testid="input-password"
        />
        {password === '' && !isErrorPassword ? (
          <FormHelperText>Por favor introduzca su contraseña</FormHelperText>
        ) : (
          isErrorPassword && (
            <FormErrorMessage data-testid="error-password">La contraseña es requerida.</FormErrorMessage>
          )
        )}
      </FormControl>
      <Button
        gap={4}
        mt={10}
        isLoading={isLoading}
        loadingText="Espere"
        colorScheme="teal"
        variant="solid"
        data-testid="send"
        onClick={() => {
          handleSubmit();
        }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default LoginComp;
