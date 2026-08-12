import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import AppLayout from './layouts/AppLayout';
import Buod from './pages/Buod';
import NotFound from './pages/NotFound';
import Tauhan from './pages/Tauhan';
import Pagsusuri from './pages/Pagsusuri';
import Kredito from './pages/Kredito';

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
        element: <Pagsusuri />,
      },
      {
        path: 'kredito',
        element: <Kredito />,
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
