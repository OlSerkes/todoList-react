import { styled, createTheme } from '@mui/material/styles';
import { lighten } from 'polished';

export const Colors = {
  primary: '#5854a1',
  secondary: '#00c7c0',
  dark: '#22414d',
  light: '#DCE0E0',
  shaft: '#333',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  white: '#fff',
  black: '#000',
};

const overrides = {
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            backgroundColor: Colors.light,
            fontSize: '11px',
            '&:hover': {
              backgroundColor: Colors.primary,
              color: Colors.white,
            },
            '&:active': {
              backgroundColor: Colors.primary,
              color: Colors.white,
            },
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 900,
      desktop: 1200,
    },
  },
};

const theme = createTheme(overrides);

export { overrides };
export default theme;
