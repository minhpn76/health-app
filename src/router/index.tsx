import React, {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import * as urls from 'src/constants/urls';
import AppLayout from 'src/layouts/app-layout/AppLayout';

const Home = React.lazy(() => import('src/pages/home/HomePage'));
const MyRecord = React.lazy(() => import('src/pages/my-record/MyRecordPage'));
const Column = React.lazy(() => import('src/pages/column/ColumnPage'));
const Login = React.lazy(() => import('src/pages/login/LoginPage'));

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
    element: <AppLayout isAnonymous />,
    children: [
      {
        index: true,
        element: lazyLoad(<Column />),
      },
    ],
  },
  {
    path: urls.LOGIN,
    element: lazyLoad(<Login />),
  },
  // {
  //   path: urls.ERROR_FORBIDDEN,
  //   element: <Error error={{status: 403}} />,
  // },
]);

export default router;
