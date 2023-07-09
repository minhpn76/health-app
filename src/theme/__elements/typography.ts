import * as colors from './colors';

export const fontFamily = {
  inter: 'Inter',
};

export const typographyConfiguration = {
  fontFamily: fontFamily.inter,
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
    fontSize: 22,
    lineHeight: '30px',
  },
  body: {
    fontSize: 20,
    lineHeight: '28px',
  },
  p: {
    fontSize: 18,
    lineHeight: '24px',
  },
  label: {
    fontSize: 16,
    lineHeight: '24px',
  },
  small: {
    fontSize: 14,
    lineHeight: '16px',
  },
  tiny: {
    fontSize: 12,
    lineHeight: '10px',
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
