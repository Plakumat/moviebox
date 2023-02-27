import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './container';
import { MovieDetail } from './routes';
import App from './App';
import { Home } from './routes';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home />, errorElement: <Error /> },
      {
        path: '/movie/:movieId',
        element: <MovieDetail />,
        errorElement: <Error />,
      },
    ],
  },
]);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
