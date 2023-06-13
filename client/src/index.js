import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/Root';
import store from './store';
import { Provider } from 'react-redux';
import Theme from './styles/themes/theme';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { Error } from './routes/main-app/Error';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>
    </Theme>
  </React.StrictMode>
);
