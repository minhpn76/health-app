import {test, expect, describe} from 'vitest';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColumnPage from '../ColumnPage';
import {renderWithRouterReactQuery} from 'src/utils/tests';

describe('Column page had data', () => {
  test('Should be render had four box recommend', () => {
    renderWithRouterReactQuery(<ColumnPage />);
    const recommendItem = screen.getAllByTestId('recommend-item');
    expect(recommendItem).toHaveLength(4);
  });

  test('Should be render posts list', async () => {
    renderWithRouterReactQuery(<ColumnPage />);
    const postItem = screen.getAllByTestId('post-item');
    expect(postItem).toHaveLength(8);
    const btnLoadMore = screen.getByTestId('btn-load-more');
    await userEvent.click(btnLoadMore);
    waitFor(() => {
      expect(postItem).toHaveLength(12);
    });
  });
});
