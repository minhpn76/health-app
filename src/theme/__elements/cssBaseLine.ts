import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

import {fontFamily} from './typography';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiCssBaseline'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiCssBaseline'];
  variants?: ComponentsVariants['MuiCssBaseline'];
} = {
  styleOverrides: theme => ({
    '@fontFace': {
      fontFamily: fontFamily.inter,
    },
    body: {
      fontSize: 14,
    },
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 50,
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.15)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette?.gray?.[300],
      borderRadius: 50,
    },
  }),
};

export default defaultSettings;
