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
      },
    },
  });
  const history = createMemoryHistory();
  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        <Router location={history.location} navigator={history}>
          {ui}
        </Router>
      </QueryClientProvider>
    ),
    history,
  };
};
