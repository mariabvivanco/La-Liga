import ClubsPage from '../pages/ClubsPage';
import ClubPage from '../pages/ClubPage';
import LoginPage from '../pages/LoginPage';

export interface IRouteProps {
  path: string;
  name: string;
  Component: JSX.Element;
}

export const routes = {
  private: [
    {
      path: '/clubs',
      name: 'clubs',
      Component: ClubsPage,
    },
    {
      path: '/club/:clubID',
      name: 'club',
      Component: ClubPage,
    },
  ],
  public: [
    {
      path: '/login',
      name: 'login',
      Component: LoginPage,
    },
  ],
};
