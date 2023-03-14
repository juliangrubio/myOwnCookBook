import { CSSProperties, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { AppBar, Box, IconButton, SxProps, Tab, Tabs, Theme, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { MenuOutlinedIcon, DarkModeIcon } from '../../icons'
import { UIContext } from '../../context/ui';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import { useCheckRoutes } from '../../hooks';

// interface Props {
//     tabStyles: CSSProperties;
// }

const tabStyles: SxProps<Theme> = {
    ml: 6,
    color: 'primary',
    fontSize: 22,
    fontWeight: 900
}

export const NavBar = () => {
    const theme = useTheme();
    const { sideOpen, theme: Theme, lightTheme, darkTheme } = useContext(UIContext);
    const navigate = useNavigate();
    const { indexValue } = useCheckRoutes();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
    // const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
    // const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
    // if (greaterThanMid) {
    //     console.log("Arriba de MD");
    // } else if (smallToMid) {
    //     console.log("Entre SM y MD");
    // } else if (lessThanSmall) {
    //     console.log("Abajo de SM");
    // }

    useEffect(() => {
        setValue(indexValue)
    }, [indexValue])

    return (
        <AppBar position='sticky' color='transparent' sx={{ p: 4 }}>
            {/* <AppBar position='sticky' color={"primary"}> */}
            <Toolbar>
                {
                    useMediaQuery(theme.breakpoints.down("md")) &&
                    <IconButton size='large' edge='start' onClick={sideOpen}>
                        <MenuOutlinedIcon />
                    </IconButton>
                }
                {/* <Typography variant='h6' sx={{ flexGrow: 1 }}>myOwnCookBook</Typography> */}

                <Box sx={{
                    // width: '100%', 
                    flexGrow: 1
                }}>
                    {
                        useMediaQuery(theme.breakpoints.up("md")) &&
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            // textColor='primary'
                            // variant="fullWidth"

                            // sx={{
                            // "& button": {borderRadius: 10},
                            // "& button:active": {background: 'cyan'},
                            //     "& button:hover": { background: "green" },
                            //     "& button.Mui-selected": { background: "red", color: "blue" },


                            // "& .indicator": {
                            //     display: "flex",
                            //     justifyContent: "center",
                            //     backgroundColor: "transparent",
                            //     "& > span": {
                            //         maxWidth: 40,
                            //         width: "100%",
                            //         backgroundColor: "white"
                            //     }
                            // },
                            // }}
                            TabIndicatorProps={{
                                children: <span className="MuiTabs-indicatorSpan" />,
                                sx: {
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundColor: "transparent",
                                    ".MuiTabs-indicatorSpan": {
                                        maxWidth: 80,
                                        width: 80,
                                        backgroundColor: theme.palette.primary.main,
                                        // height: 40
                                    }
                                }
                            }}
                        // centered
                        >
                            <Tab label='Home' sx={tabStyles} onClick={() => navigate('/home')} />
                            <Tab label="Save one" sx={tabStyles} onClick={() => navigate('/saveone')} />
                            <Tab label="My Recipes" sx={tabStyles} onClick={() => navigate('/recipes')} />
                        </Tabs>
                    }
                </Box>

                <IconButton size='large' edge='end' onClick={() => (Theme === 'light') ? darkTheme() : lightTheme()}>
                    <DarkModeIcon />
                    <Typography sx={{ ml: 1 }}>Change to {(Theme === 'light') ? 'Dark' : 'Light'}</Typography>
                </IconButton>
            </Toolbar>
        </AppBar >
    )
}
