import { FC } from "react";
import { Navigate, RouteProps } from "react-router";

const isAuthenticated = true;

export const PrivateRoute: FC<RouteProps> = ({ children }: RouteProps) => {
  isAuthenticated;
  return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
};

export const PublicRoute: FC<RouteProps> = ({ children }: RouteProps) => {
  isAuthenticated
  return <>{isAuthenticated ? <Navigate to="/clubs" /> : children}</>;
};
