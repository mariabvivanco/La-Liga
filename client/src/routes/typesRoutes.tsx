//Realiza el tratamiento a la ruta de acuerdo al  comportamiento que se espera de una ruta pública o privada

import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Navigate, RouteProps } from 'react-router-dom';
import { token } from '../store/auth/authSlicer';

export const PrivateRoute: FC<RouteProps> = ({ children }: RouteProps) => {
  const isAuthenticated: boolean = useSelector(token) !== '';
  return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
};

export const PublicRoute: FC<RouteProps> = ({ children }: RouteProps) => {
  const isAuthenticated: boolean = useSelector(token) !== '';
  return <>{isAuthenticated ? <Navigate to="/clubs" /> : children}</>;
};
