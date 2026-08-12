import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import AppLayout from './layouts/AppLayout';
import Buod from './pages/Buod';
import NotFound from './pages/NotFound';
import Tauhan from './pages/Tauhan';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/buod" replace />,
      },
      {
        path: 'buod',
        element: <Buod />,
      },
      {
        path: 'tauhan',
        element: <Tauhan />,
      },
      {
        path: 'pagsusuri',
        element: <p>Pagsusuri</p>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
