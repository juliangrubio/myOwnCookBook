import { useContext, useState, useEffect, useLayoutEffect } from 'react';

import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { HomeOutlinedIcon, SaveOutlinedIcon, MenuBookOutlinedIcon } from '../../icons'
import { UIContext } from '../../context/ui';
import { useCheckRoutes } from '../../hooks';

const menuItems: string[][] = [['Home', 'HomeOutlinedIcon', '/home'], ['Save one', 'SaveOutlinedIcon', '/saveone'], ['Recipes', 'MenuBookOutlinedIcon', '/recipes']]

const componentMapping: any = {
    // Typescript infiere
    HomeOutlinedIcon,
    SaveOutlinedIcon,
    MenuBookOutlinedIcon,
};

export const SideBar = () => {
    const { sideMenuOpen, sideClose } = useContext(UIContext);
    const navigate = useNavigate();
    const { indexValue } = useCheckRoutes();
    const [selectedIndex, setSelectedIndex] = useState(indexValue);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        setSelectedIndex(indexValue);
    }, [indexValue])

    return (
        <Drawer
            anchor='left'
            open={sideMenuOpen}
            onClose={() => sideClose()}
        >
            <Box sx={{ width: 300, }}>
                <Box sx={{ p: '5px 10px', pb: 3, backgroundColor: 'black' }}>
                    <Typography
                        variant='h3'
                        textAlign='center'
                        color={'secondary.light'}
                        sx={{ mt: 3 }}
                    >
                        CookBook
                    </Typography>
                </Box>

                <List
                    sx={{
                        // selected and (selected + hover) states
                        '&& .Mui-selected, && .Mui-selected:hover': {
                            bgcolor: 'red',
                            '&, & .MuiListItemIcon-root': {
                                color: 'pink',
                            },
                        },
                        // hover states
                        '& .MuiListItemButton-root:hover': {
                            bgcolor: 'orange',
                            '&, & .MuiListItemIcon-root': {
                                color: 'yellow',
                            },
                        },
                    }}
                >
                    {
                        menuItems.map((text, i) => {
                            const Component = componentMapping[text[1]]

                            return (
                                <ListItemButton
                                    key={text[0]}
                                    // selected={selectedIndex === i}
                                    selected={selectedIndex === i}
                                    // selected={selectedIndex === i}
                                    onClick={event => {
                                        handleListItemClick(event, i);
                                        navigate(text[2]);
                                        sideClose();
                                    }}
                                // onClick={() => { navigate(text[2]); sideClose(); }}
                                // sx={{backgroundColor: 'red'}}
                                >
                                    <ListItemIcon

                                        sx={{ color: 'grey.A400' }}
                                    // sx={{
                                    //     color: 'grey.A400',
                                    //     ...(indexValue === i && {
                                    //         color: 'red',
                                    //     }),
                                    // }}
                                    >
                                        <Component />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text[0]}
                                        primaryTypographyProps={{ fontSize: '18px' }}
                                    />
                                </ListItemButton>
                            )
                        })
                    }
                </List>

                {/* <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </List> */}
            </Box>
        </Drawer>
    )
}
