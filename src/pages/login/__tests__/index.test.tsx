import {test, describe, expect} from 'vitest';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '../LoginPage';
import {renderWithRouterReactQuery} from 'src/utils/tests';

describe('Login Page', () => {
  test('Should be had required field', async () => {
    renderWithRouterReactQuery(<LoginPage />);
    const btnSubmit = screen.getByRole('button', {name: 'Login'});
    userEvent.click(btnSubmit);
    const usernameRequired = await screen.findByText('Username is required');
    const passwordRequired = await screen.findByText('Password is required');
    expect(usernameRequired).toBeInTheDocument();

    expect(passwordRequired).toBeInTheDocument();
  });

  test('Should be able login from', async () => {
    const {history} = renderWithRouterReactQuery(<LoginPage />);
    const usernameField = screen.getByRole('textbox', {name: 'Username'});
    await userEvent.type(usernameField, 'admin');

    const passwordField = screen.getByLabelText('Password');
    await userEvent.type(passwordField, 'admin');

    const btnSubmit = screen.getByRole('button', {name: 'Login'});
    await userEvent.click(btnSubmit);
    waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
}, 1000);
