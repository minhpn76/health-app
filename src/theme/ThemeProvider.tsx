import {CssBaseline} from '@mui/material';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {ThemeProviderProps as MuiThemeProviderProps} from '@mui/material/styles/ThemeProvider';

import theme from './theme';

export default function ThemeProvider(props: Partial<MuiThemeProviderProps>) {
  const {children, ...restProps} = props;

  return (
    <MuiThemeProvider theme={theme} {...restProps}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
