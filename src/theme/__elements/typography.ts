import * as colors from './colors';

export const fontFamily = 'Lato';

export const typographyConfiguration = {
  fontFamily,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  fontWeightMedium: 500,
  fontWeightLight: 300,
  allVariants: {
    color: colors.dark500,
    fontWeight: 400,
  },
  hero: {
    fontSize: 56,
    lineHeight: '72px',
  },
  h1: {
    fontSize: 48,
    lineHeight: '72px',
  },
  h2: {
    fontSize: 40,
    lineHeight: '56px',
  },
  h3: {
    fontSize: 32,
    lineHeight: '48px',
  },
  h4: {
    fontSize: 24,
    lineHeight: '32px',
  },
  h5: {
    fontSize: 20,
    lineHeight: '28px',
  },
  body: {
    fontSize: 16,
    lineHeight: '24px',
  },
  p: {
    fontSize: 16,
    lineHeight: '24px',
  },
  label: {
    fontSize: 14,
    lineHeight: '24px',
  },
  small: {
    fontSize: 12,
    lineHeight: '16px',
  },
  tiny: {
    fontSize: 10,
    lineHeight: '12px',
  },
};

export const typographyDefaultSettings = {
  defaultProps: {
    variantMapping: {
      hero: 'p',
      body: 'p',
      p: 'p',
      label: 'p',
      small: 'p',
      tiny: 'p',
    },
  },
};
