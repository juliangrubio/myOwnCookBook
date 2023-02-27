import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300]
    },
    primary: {
      // main: '#43434387',
      // dark: '#ffffff',
      main: '#000000'
    },
    secondary: {
      main: '#90bf3b',
      // dark: '#ffffff85',
      light: '#aac17e'
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
    // MuiButton: {
    //   defaultProps: { color: 'error' },
    // },
    // MuiTabs: {
    //   defaultProps: { textColor: 'primary'}
    // }
    // MuiTab: {
    //   defaultProps: {
    //     textColor: 'green',
    //     // backgroundColor: 'green',
    //     '&.Mui-selected': {
    //       background: 'red'
    //     }
    //   },
    // }
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // backgroundColor: '#1c3d04da',
          // backgroundColor: '#42277da7',
          backgroundColor: '#000000b6',
          // marginTop: 125,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          color: 'white',
        }
      }
    }
  }
});