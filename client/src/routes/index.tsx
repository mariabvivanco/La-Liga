//Componente que establece el enrutado de la aplicación basandose en las rutas definidas en routes.

import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { routes } from './routes';
import { PrivateRoute, PublicRoute } from './typesRoutes';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.private.map(({ path, name, Component }) => (
          <Route
            path={path}
            key={name}
            element={
              <PrivateRoute key={name}>
                <Component />
              </PrivateRoute>
            }
          />
        ))}

        {routes.public.map(({ path, name, Component }) => (
          <Route
            path={path}
            key={name}
            element={
              <PublicRoute key={name}>
                <Component />
              </PublicRoute>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/clubs" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
