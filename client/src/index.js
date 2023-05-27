import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/Root';
import store from './store';
import { Provider } from 'react-redux';
import Theme from './styles/themes/theme';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './routes/main-app/Error';
import Personal from './routes/main-app/Personal';
import Home from './routes/main-app/Home';
import About from './routes/main-app/About';
import Contact from './routes/main-app/Contact';
import Project from './routes/main-app/Project';
import Album from './routes/main-app/Album';
import { Root as RootAdm } from './routes/adm/Root';
import Projeto from './routes/adm/Projeto';
import { Album as AlbumADM } from './routes/adm/Album';
import Fotos from './routes/adm/Fotos';
import Photo from './routes/main-app/Photo';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/upload-test-page',
    element: <RootAdm />,
    errorElement: <Error />,
    children: [
      { path: 'projeto', element: <Projeto /> },
      { path: 'album', element: <AlbumADM /> },
      { path: 'fotos', element: <Fotos /> },
    ],
  },
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Project />,
      },
      {
        path: 'personal',
        element: <Personal />,
      },
      {
        path: '/projects/:projectIdRef/albums',
        element: <Album />,
      },
      {
        path: '/projects/:projectIdRef/albums/:albumIdRef/photos',
        element: <Photo />,
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
