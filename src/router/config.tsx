import { RouteObject, Navigate } from 'react-router-dom';
import HomePage from '../pages/home/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default routes;
