import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { MenuOutlinedIcon, DarkModeIcon } from '../../icons'

export const NavBar = () => {
    return (
        <AppBar position='sticky' color='transparent'>
        {/* <AppBar position='sticky' color={"primary"}> */}
            <Toolbar>
                <IconButton size='large' edge='start'>
                    <MenuOutlinedIcon />
                </IconButton>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>myOwnCookBook</Typography>
                <IconButton size='large' edge='end'>
                    <DarkModeIcon />
                </IconButton>
                <Typography sx={{ ml: 1 }}>Change to </Typography>
            </Toolbar>
        </AppBar>
    )
}
