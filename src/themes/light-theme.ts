import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300]
    },
    primary: {
      main: '#43434387',
      // dark: '#ffffff',
      // light: '#000000'
    },
    secondary: {
      main: '#90bf3b',
      dark: '#ffffff85',
      light: '#0000008c'
    },
    text: {
      primary: "#000000"
    },
    error: {
      main: red.A400
    }
  },

  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {}
    },
    MuiButton: {
      defaultProps: { color: 'error' },
      // styleOverrides: {colorInherit: 'red'}
    }
  }
});