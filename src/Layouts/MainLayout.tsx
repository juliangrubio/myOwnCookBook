import { Box } from "@mui/material";
import { FC, ReactNode } from "react"
import { NavBar } from "./ui";
import bg from '../assets/bg.svg'


interface Props {
    children?: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Box
                sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    backgroundImage: `url(${bg})`,
                    backgroundSize: '100% 100%',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center',
                }}
            >
                {/* <Box sx={{ p: 4 }}> */}
                    <NavBar />
                {/* </Box> */}
                {children}
            </Box>
            {/* <SideBar /> */}
        </>
    )
}
