import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#19857b'
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