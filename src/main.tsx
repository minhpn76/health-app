import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setupHttpClient from './api/setupHttpClient';
import './index.css';

//enabled mock service
if (import.meta.env['DEV']) {
  const {worker} = await import('./__mocks__/browser');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      options: {
        scope: '/',
      },
    },
  });
}

setupHttpClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
