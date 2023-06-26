import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Root from './routes/Root';
import store from './store';
import Theme from './styles/themes/theme';
import ReactModal from 'react-modal';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
ReactModal.setAppElement('#root');

root.render(
  <Theme>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </Theme>
);
