import { createTheme } from '@mui/material/styles';
import { lighten } from 'polished';

export const Colors = {
  primary: '#5854a1',
  secondary: '#00c7c0',
  success: '#4caf50',
  info: '#00d5ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#22414d',
  light: '#DCE0E0',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  white: '#fff',
  black: '#000',
};

// TODO: define overrides object to create theme
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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: Colors.dark,
          color: Colors.dove_gray,
          borderRadius: '0px 10px 10px 0px',
          borderRight: `1px solid ${Colors.primary}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.dark),
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: Colors.light,
            color: Colors.primary,
            '&:hover': {
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

// TODO: use overrides object to create theme
// const theme =;

const theme = createTheme(overrides);

export { overrides };
export default theme;
