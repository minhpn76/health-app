import {createTheme} from '@mui/material/styles';

import palette from './__elements/palette';
import cssBaseLine from './__elements/cssBaseLine';
import {
  typographyConfiguration,
  typographyDefaultSettings,
} from './__elements/typography';
import shadows from './__elements/shadows';

const theme = createTheme({
  palette,
  typography: typographyConfiguration,
  shadows,
  components: {
    MuiCssBaseline: cssBaseLine,
    // MuiTypography: typographyDefaultSettings,
  },
});

export default theme;
