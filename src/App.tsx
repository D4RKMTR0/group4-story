import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import AppLayout from './layouts/AppLayout';

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
        element: <p>Buod</p>,
      },
      {
        path: 'tauhan',
        element: <p>Tauhan</p>,
      },
      {
        path: 'pagsusuri',
        element: <p>Pagsusuri</p>,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
