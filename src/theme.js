import {createTheme} from '@mui/material';
import { alpha } from '@mui/material/styles';

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
    divider: alpha(blackColor, 0.12)
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
          borderRadius: '100px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            textDecoration: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: primaryColor,
          color: whiteColor,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: blackColor,
            color: whiteColor,
          },
        },
        containedSecondary: {
          backgroundColor: secondaryColor,
          color: blackColor,
          '&:hover': {
            backgroundColor: whiteColor,
            color: blackColor,
          },
        },
        // textPrimary: {
        //   backgroundColor: alpha(primaryColor, 0.1),
        // },
        // textSecondary: {
        //   backgroundColor: alpha(secondaryColor, 0.1),
        // },
        outlined: {
          borderWidth: '2px',
        },
        sizeSmall: {
          padding: '0.375rem 1.5rem',
          fontSize: '0.8rem',
          minWidth: '60px',
        },
        sizeMedium: {
          padding: '0.5625rem 2rem',
          fontSize: '0.95rem',
          minWidth: '90px',
        },
        sizeLarge: {
          padding: '0.75rem 3rem',
          fontSize: '1rem',
          minWidth: '120px',
        }
      },
      variants: [
        {
          props: { variant: 'bounded' },
          style: ({ theme }) => ({
            color: theme.palette.white.contrastText,
            border: `1px solid ${alpha(theme.palette.white.contrastText, 0.1)}`,
            backgroundColor: alpha(theme.palette.white.contrastText, 0.1),
            '&:hover': {
              backgroundColor: theme.palette.white.contrastText,
              borderColor: theme.palette.white.contrastText,
              color: theme.palette.white.main,
            },
          }),
        },
        {
          props: { variant: 'bounded', size: 'xs' },
          style: () => ({
            padding: '0.25rem 0.7rem',
            fontSize: '0.7rem'
          }),
        },
        {
          props: { variant: 'outlined', size: 'small' },
          style: {
            padding: '0.375rem 1rem',
            fontSize: '0.8rem',
          },
        },
        {
          props: { variant: 'outlined', size: 'medium' },
          style: {
            padding: '0.5625rem 1.35rem',
            fontSize: '0.85rem',
          }
        },
        {
          props: { variant: 'outlined', size: 'large' },
          style: {
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
          }
        },
      ],
    },
  },
});

export default theme;