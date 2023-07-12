import React, {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import * as urls from '../constants/urls';
import AppLayout from '../layouts/app-layout/AppLayout';

// eslint-disable-next-line react-refresh/only-export-components
const Home = React.lazy(() => import('../pages/home/HomePage'));
const MyRecord = React.lazy(() => import('../pages/my-record/MyRecordPage'));
const Column = React.lazy(() => import('../pages/column/ColumnPage'));
const Login = React.lazy(() => import('../pages/login/LoginPage'));

const lazyLoad = (children: React.ReactNode) => {
  return (
    <Suspense fallback={<div className="d-flex vh-100">Loading..</div>}>
      {children}
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: urls.HOME,
    element: <AppLayout />,
    // ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: urls.MY_RECORD,
        element: lazyLoad(<MyRecord />),
      },
    ],
  },
  {
    path: urls.COLUMN,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Column />),
      },
    ],
  },
  {
    path: urls.LOGIN,
    element: <Login />,
  },
  // {
  //   path: urls.ERROR_FORBIDDEN,
  //   element: <Error error={{status: 403}} />,
  // },
]);

export default router;
