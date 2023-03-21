import { Box } from "@mui/material"

import { Receta } from "../interfaces";
import { Card } from "./";
import { useEffect } from 'react';

interface Props {
    data: Receta[];
    handleChangeValueRecipe: (value: string) => void;
    // setSomeHtml: (value: string) => void;
}

export const CardList = ({ data, handleChangeValueRecipe }: Props) => {

    // useEffect(() => {
    //     handleChangeValueRecipe('jjjjjijijijijij')
    // }, [])

    console.log(data)


    return (
        <Box
            // onClick={() => handleChangeValueRecipe('jjjjjijijijijij')}
            // onClick={() => console.log('jaj')}
            sx={{
                height: '100%',
                width: '100%',
                overflowY: 'scroll',
                overflowX: 'hidden',
                backgroundColor: '#fffad4',
                borderRadius: 10,
                // mb: 88
                border: 5,
                borderColor: '#fffad4',
                // pb: 3,
                // m: 3,

                '&::-webkit-scrollbar': {
                    width: '8px',
                    height: '100px',
                },
                '&::-webkit-scrollbar-track': {
                    // backgroundColor: (theme) => theme.palette.red[800],
                    backgroundColor: 'red',
                },
                '&::-webkit-scrollbar-thumb': {
                    // backgroundColor: (theme) => theme.palette.primary.main,
                    backgroundColor: 'red',
                    borderRadius: '20px',
                },
            }}>
            {/* <Box sx={{
                    // my: 3, 
                    height: '100%', width: '100%',
                }}> */}
            {
                // data.map(({ id, title, preparation }) => (
                data.map(recipe => (
                    <Card
                        key={recipe.id}
                        data={recipe}
                        handleChangeValueRecipePreview={handleChangeValueRecipe}
                    />
                ))
            }
        </Box>
        // </Box>
    )
}
