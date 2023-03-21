import { Box, Typography } from "@mui/material"
import { Receta } from "../interfaces";

interface Props {
    data: Receta;
    handleChangeValueRecipePreview: (value: string) => void;
}

export const Card = ({
    data,
    handleChangeValueRecipePreview
}: Props) => {
    const { title, preparation } = data;

    return (
        <Box
            onClick={() => handleChangeValueRecipePreview(preparation)}
            // onClick={() => handleChangeValueRecipePreview('<h1>jajajeeeeeeeeee</h1>')}
            // onClick={() => handleChangeValueRecipePreview('jjjjjjjjjjjjjjjj')}
            sx={{
                height: 100,
                // backgroundColor: '#4f5974',
                background: 'linear-gradient(90deg, rgba(187,223,114,1) 0%, rgba(40,130,3,0.8029412448573179) 100%)',
                // background: 'linear-gradient(90deg, rgba(190,205,159,1) 0%, rgba(100,122,91,0.8029412448573179) 100%)',
                cursor: 'pointer',
                borderRadius: 3,
                my: 1,
                mx: 1,
                px: 2,
            }}>
            <Box sx={{ p: 1 }}>

                <Typography sx={{ fontWeight: 'bold' }} noWrap>
                    {title}
                </Typography>

            </Box>
        </Box>
    )
}
