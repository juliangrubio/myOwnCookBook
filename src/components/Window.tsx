import { Box, Button, Grid, Typography } from "@mui/material"
import { ReactNode } from "react";

interface Props {
    height: string;
    width?: string;
    cardBackground?: string;
    title?: string;
    titleColor?: string;
    titleBackgroundColor?: string;
    button?: boolean;
    titleButton?: string;
    children?: ReactNode;
}

export const Window = ({
    height,
    width,
    title = '',
    titleColor = 'secondary.light',
    titleBackgroundColor = '#000000b6',
    cardBackground = 'rgba(68, 68, 68, 0.1)',
    button,
    titleButton = 'button',
    children
}: Props) => {
    return (
        <>
            <Box sx={{
                m: 3,
                // p: 3,
                backgroundColor: cardBackground,
                borderRadius: 10,
                // minHeight: { xs: 400, sm: 'calc(100vh - 190px)', md: 'calc(100vh - 190px)', lg: 'calc(100vh - 190px)', xl: 'calc(100vh - 190px)' },
                display: "flex",
                flexDirection: "column",
                height,
                width,
                overflow: "hidden",
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        height: 70,
                        minHeight: 70,
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#000000b6',
                    }}
                >
                    <Typography
                        variant='h5'
                        color={titleColor}
                        sx={{
                            ml: 3
                        }}
                    >
                        {title}
                    </Typography>
                    {
                        button &&
                        (<Button
                            variant='outlined'
                            color='secondary'
                            sx={{ mr: 5, fontSize: 20, borderTopRightRadius: 10 }}
                        >
                            {titleButton}
                        </Button>)
                    }
                </Box>
                {children}
            </Box>
        </>
    )
}


