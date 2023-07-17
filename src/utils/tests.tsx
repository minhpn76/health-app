import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {render} from '@testing-library/react';
import {ReactElement} from 'react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

export const renderWithRouterReactQuery = (ui: ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        useErrorBoundary: (error: any) => {
          // Request is canceled if token expired (handled in axios-config request interceptor)
          // Don't throw this error to error boundary
          if (error?.message === 'canceled') return false;
          return true;
        },
        retry: 0,
      },
    },
  });
  const history = createMemoryHistory();

  return {
    render: render(
      <QueryClientProvider client={queryClient}>
        <Router location={history.location} navigator={history}>
          {ui}
        </Router>
      </QueryClientProvider>
    ),
    history: history,
  };
};
