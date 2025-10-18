import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import App from './App.jsx';
import './index.scss';

// Define color constants
const primaryColor = '#0033FF';
const secondaryColor = '#dcfce8';
const accentColor = '#f44336';
const whiteColor = '#ffffff';
const blackColor = '#000000';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: whiteColor,
    },
    secondary: {
      main: secondaryColor,
      contrastText: blackColor,
    },
    accent: {
      main: accentColor,
      contrastText: whiteColor,
    },
    white: {
      main: whiteColor,
      contrastText: blackColor,
      contrastTheme: primaryColor,
    },
    dark: {
      main: blackColor,
      contrastText: whiteColor,
    },
    divider: {
      main: '#000000',
    }
  },
  typography: {
    fontFamily: 'Zalando Sans',
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: primaryColor,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: '20px !important',
          paddingRight: '20px !important',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.custom': {
            maxWidth: '1360px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '& span': {
            color: primaryColor,
            backgroundColor: '#dcfce8',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          display: 'inline-block',
        },
        containedPrimary: {
          backgroundColor: primaryColor,
          boxShadow: 'none',
          color: whiteColor,
          '&:hover': {
            boxShadow: `0px 0px 0px 2px ${primaryColor}`,
            backgroundColor: whiteColor,
            color: blackColor,
          },
        },
        sizeLarge: {
          padding: '12px 48px',
          fontSize: '1rem',
          minWidth: '120px',
          borderRadius: '8px',
        },
      },
      variants: [
        {
          props: { variant: 'bounded', size: 'small' },
          style: ({ theme }) => ({
            border: `1px solid ${alpha(theme.palette.white.contrastText, 0.1)}`,
            color: theme.palette.white.contrastText,
            backgroundColor: alpha(theme.palette.white.contrastText, 0.1),
            padding: '4px 16px',
            fontSize: '0.8125rem',
            borderRadius: "100px",
            '&:hover': {
              backgroundColor: theme.palette.white.contrastText,
              borderColor: theme.palette.white.contrastText,
              color: theme.palette.white.main,
            },
          }),
        },
        {
          props: { variant: 'bounded', size: 'medium' },
          style: ({ theme }) => ({
            border: `1px solid ${alpha(theme.palette.white.contrastText, 0.1)}`,
            color: theme.palette.white.contrastText,
            backgroundColor: alpha(theme.palette.white.contrastText, 0.1),
            padding: '6px 22px',
            fontSize: '0.875rem',
            borderRadius: "100px",
            '&:hover': {
              backgroundColor: theme.palette.white.contrastText,
              borderColor: theme.palette.white.contrastText,
              color: theme.palette.white.main,
            },
          }),
        },
      ],
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
