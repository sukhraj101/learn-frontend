import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { purple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#171717ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: purple[500],
    },
    grey: {
      main: '#767676',
    },
    white: {
      main: '#ffffff',
      contrastText: '#333333',
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
          color: '#225eda',
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
            color: '#ac1de4',
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
          backgroundColor: '#ac1de4',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#9c1ad0',
          },
        },
        sizeLarge: {
          padding: '12px 48px', // bigger padding
          fontSize: '1.25rem',  // bigger font size
          minWidth: '160px',    // bigger min width
          borderRadius: '20px',
        },
      },
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
