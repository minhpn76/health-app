export {};

declare module '@mui/material/styles/createPalette' {
  interface LightColors {
    main?: string;
  }

  interface PaletteColor {
    600: string;
    500: string;
    400: string;
    300: string;
  }

  interface PaletteOptions {
    primary?: Partial<PaletteColor>;
    secondary?: Partial<PaletteColor>;
    dark?: Partial<PaletteColor>;
    gray?: Partial<PaletteColor>;
    light?: LightColors;
  }

  interface Palette {
    primary?: Partial<PaletteColor>;
    secondary?: Partial<PaletteColor>;
    dark?: Partial<PaletteColor>;
    gray?: Partial<PaletteColor>;
    light?: LightColors;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero?: true;
    body?: true;
    p: true;
    label: true;
    small: true;
    tiny: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    '32': true;
    '40': true;
    '48': true;
    '56': true;
  }

  interface ButtonPropsColorOverrides {
    default: true;
    pressed: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsSizeOverrides {
    '24': true;
    '32': true;
    '40': true;
    '48': true;
    '56': true;
  }

  interface IconButtonPropsColorOverrides {
    default: true;
    pressed: true;
  }
}

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    light?: LightColors;
  }
}
