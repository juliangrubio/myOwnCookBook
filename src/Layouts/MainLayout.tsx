import { useContext }       from 'react';

import { Box }              from '@mui/material';
import { Outlet }           from 'react-router-dom';

import bg                   from '../assets/bg.svg'
import bg_dark              from '../assets/bg_dark.svg'
import { NavBar, SideBar }  from './ui';
import { UIContext }        from '../context/ui/UIContext';

export const MainLayout = () => {
    const { theme } = useContext(UIContext);

    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: '100vh',
                backgroundImage: (theme === 'light') ? `url(${bg})` : `url(${bg_dark})`,
                backgroundSize: '100% 100%',
            }}
        >
            <NavBar />
            <SideBar />

            <Outlet />
        </Box>
    )
}
