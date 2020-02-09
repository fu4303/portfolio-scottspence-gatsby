import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
  colours: {
    transparent: 'transparent',

    black: '#000',
    white: '#fff',
    primary: {
      100: '#3c60a4',
      200: '#6063ae',
      300: '#8164b3',
      400: '#a064b5',
      500: '#be64b2',
      600: '#d964ab',
    },
    grey: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
  },
  font: {
    header: 'Alatsi, sans-serif',
    body: 'Poppins, sans, sans-serif',
    monospace: '"Space Mono", monospace',
  },
  maxWidth: '580px',
  breakpoints: {
    sm: '375px',
    md: '576px',
    lg: '1023px',
    xl: '1524px',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
  },
  spacing: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },
};

export const GlobalStyle = createGlobalStyle`
  
  ${reset}
  
  /* use for debugging only!! */
  /* * {
    outline: 1px solid red !important;
  } */

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.body};
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colours.grey[900]};
  }
  body {
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background-color: ${({ theme }) => theme.colours.grey[100]};
  }
`;
