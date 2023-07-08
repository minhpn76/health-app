import React, {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import * as urls from '../constants/urls';
import AppLayout from '../layouts/AppLayout';

// eslint-disable-next-line react-refresh/only-export-components
const Home = React.lazy(() => import('../pages/Home'));

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
    ],
  },
  // {
  //   path: urls.ERROR_FORBIDDEN,
  //   element: <Error error={{status: 403}} />,
  // },
]);

export default router;
