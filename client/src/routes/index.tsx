import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from '../pages/Page404';

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
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
