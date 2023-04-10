import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/Root';
import store from './store';
import { Provider } from 'react-redux';
import Theme from './styles/themes/theme';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './routes/Error';
import Personal from './routes/Personal';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import AlbumPage from './routes/AlbumPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'project',
        element: <Project />,
        children: [],
      },
      {
        path: 'personal',
        element: <Personal />,
      },
      {
        path: '/project/:albumName/:albumId/album',
        element: <AlbumPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Theme>
  </React.StrictMode>
);
