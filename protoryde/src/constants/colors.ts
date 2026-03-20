export const colors = {
  primary: '#002653',
  primaryContainer: '#1A3C6E',
  onPrimary: '#FFFFFF',
  onPrimaryContainer: '#8AA8E0',
  primaryFixed: '#D7E3FF',
  primaryFixedDim: '#ABC7FF',
  onPrimaryFixed: '#001B3F',
  onPrimaryFixedVariant: '#264679',
  inversePrimary: '#ABC7FF',

  secondary: '#835500',
  secondaryContainer: '#FEAE2C',
  onSecondary: '#FFFFFF',
  onSecondaryContainer: '#6B4500',
  secondaryFixed: '#FFDDb4',
  secondaryFixedDim: '#FFB955',
  onSecondaryFixed: '#291800',
  onSecondaryFixedVariant: '#633F00',

  tertiary: '#3E1F00',
  tertiaryContainer: '#5E3100',
  onTertiary: '#FFFFFF',
  onTertiaryContainer: '#DB9960',
  tertiaryFixed: '#FFDCC2',
  tertiaryFixedDim: '#FEB87C',
  onTertiaryFixed: '#2E1500',
  onTertiaryFixedVariant: '#6B3B09',

  error: '#BA1A1A',
  errorContainer: '#FFDAD6',
  onError: '#FFFFFF',
  onErrorContainer: '#93000A',

  surface: '#F7F9FC',
  surfaceBright: '#F7F9FC',
  surfaceContainer: '#ECEEF1',
  surfaceContainerHigh: '#E6E8EB',
  surfaceContainerHighest: '#E0E3E6',
  surfaceContainerLow: '#F2F4F7',
  surfaceContainerLowest: '#FFFFFF',
  surfaceDim: '#D8DADD',
  surfaceVariant: '#E0E3E6',
  surfaceTint: '#405E92',
  onSurface: '#191C1E',
  onSurfaceVariant: '#43474F',

  background: '#F7F9FC',
  onBackground: '#191C1E',
  
  outline: '#747780',
  outlineVariant: '#C4C6D0',
  
  inverseSurface: '#2D3133',
  inverseOnSurface: '#EFF1F4',
};

export type ColorKeys = keyof typeof colors;