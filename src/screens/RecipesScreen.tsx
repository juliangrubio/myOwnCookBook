import { Grid, Box, Typography, Paper, Button, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { CardList } from '../components';
import { SearchIcon } from '../icons';
import { recipesDataSet } from '../interfaces';
// {/* <Box sx={{ height: 500, width: '100%', display: 'flex' }}> */}
// {/* </Box> */ }

const data: recipesDataSet[] = [
  { id: 1, name: 'Bacalao', prepTime: 15, cookTime: 10, servers: 4, ingredients: ['huevo', 'caca'], preparation: '<center><h1>bacalaje: mexclar y servir</h1></center>' },
  { id: 2, name: 'Pollo con papas fritas a la pomarola', prepTime: 30, cookTime: 30, servers: 5, ingredients: ['mortadela', 'helado'], preparation: 'servir sin cocinar' },
  { id: 3, name: 'Pescado Frito', prepTime: 60, cookTime: 15, servers: 6, ingredients: ['cocacola', 'aserrin'], preparation: 'mexclar y abandonar 30 dias' },
  { id: 4, name: 'Bacalao', prepTime: 15, cookTime: 10, servers: 4, ingredients: ['huevo', 'caca'], preparation: 'mexclar y servir' },
  { id: 5, name: 'Pollo con papas fritas a la pomarola', prepTime: 30, cookTime: 30, servers: 5, ingredients: ['mortadela', 'helado'], preparation: 'servir sin cocinar' },
  { id: 6, name: 'Pescado Frito', prepTime: 60, cookTime: 15, servers: 6, ingredients: ['cocacola', 'aserrin'], preparation: 'mexclar y abandonar 30 dias' },
  { id: 7, name: 'Bacalao', prepTime: 15, cookTime: 10, servers: 4, ingredients: ['huevo', 'caca'], preparation: 'mexclar y servir' },
  { id: 8, name: 'Pollo con papas fritas a la pomarola', prepTime: 30, cookTime: 30, servers: 5, ingredients: ['mortadela', 'helado'], preparation: 'servir sin cocinar' },
  { id: 9, name: 'Pescado Frito', prepTime: 60, cookTime: 15, servers: 6, ingredients: ['cocacola', 'aserrin'], preparation: 'mexclar y abandonar 30 dias' },
  { id: 10, name: 'Bacalao', prepTime: 15, cookTime: 10, servers: 4, ingredients: ['huevo', 'caca'], preparation: 'mexclar y servir' },
  { id: 11, name: 'Pollo con papas fritas a la pomarola', prepTime: 30, cookTime: 30, servers: 5, ingredients: ['mortadela', 'helado'], preparation: 'servir sin cocinar' },
  { id: 12, name: 'Pescado Frito', prepTime: 60, cookTime: 15, servers: 6, ingredients: ['cocacola', 'aserrin'], preparation: 'mexclar y abandonar 30 dias' },
]

// const flashAnimation = {
//   '0%': {
//     opacity: 1,
//   },
//   '50%': {
//     opacity: 0,
//   },
//   '100%': {
//     opacity: 1,
//   },
// };

const flashAnimation = {
  '0%': {
    fontWeight: 'normal',
  },
  '50%': {
    fontWeight: 'bold',
  },
  '100%': {
    fontWeight: 'normal',
  },
};

export const RecipesScreen = () => {
  const theme = useTheme();
  const boxToPreviewRef = useRef<HTMLDivElement>(null);
  const [someHTML, setSomeHTML] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);

  const toggleBlink = () => {
    setIsBlinking((prev) => !prev);
  };

  useEffect(() => {
    setIsBlinking(true);
  }, []);

  const handleChangeValueRecipePreview = (newValue: string) => {
    setSomeHTML(newValue)
  }

  const greaterThanXL = useMediaQuery(theme.breakpoints.up("xl"));
  const greaterThanLG = useMediaQuery(theme.breakpoints.up("lg"));
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  if (greaterThanXL) {
    console.log("Arriba de LG");
  } else if (greaterThanLG) {
    console.log("Arriba de LG");
  } else if (greaterThanMid) {
    console.log("Arriba de MD");
  } else if (smallToMid) {
    console.log("Entre SM y MD");
  } else if (lessThanSmall) {
    console.log("Abajo de SM");
  }

  useEffect(() => {
    if (boxToPreviewRef.current) {
      boxToPreviewRef.current.innerHTML = someHTML;
    }
  }, [someHTML]);
  return (
    <>
      <Grid container flexDirection={'row'} sx={{
        height: 'calc(100vh - 150px)',
        // m: 3
      }}>

        <Grid item xs={12} sm={5} lg={2.5}
          // lg={2.5} xl={2} 
          sx={{ height: '100%' }}>
          <Grid container gap={3} flexWrap={'nowrap'} flexDirection={'column'} sx={{
            height: '100%',
            p: 3,
            // backgroundColor: 'green'
            backgroundColor: 'rgba(68, 68, 68, 0.15)',
            clipPath: 'polygon(10% 0, 90% 0, 100% 3%, 100% 97%, 90% 100%, 10% 100%, 0 97%, 0 3%)'
          }}>

            <Grid item sx={{ overflow: 'hidden' }}>
              <CardList
                handleChangeValueRecipe={handleChangeValueRecipePreview}
                data={data}
              />
            </Grid>

            <Grid item sx={{
              // mt: 0
              // backgroundColor: 'red',
              borderTopRightRadius: 10
            }}>

              <Typography align="center" sx={{
                animation: isBlinking ? 'blink 1s infinite' : 'none',
                '@keyframes blink': flashAnimation
              }}>
                I don't know what I can eat, help!!
                <br />
                No worries, and click below:
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Button variant="contained" color={'secondary'} sx={{
                  mt: 3,
                  // ml: 15,
                  textTransform: 'initial',
                  height: 50,
                  maxWidth: 200,
                  borderRadius: 3,
                  color: 'white',
                  fontSize: 22,
                  fontWeight: 900,
                  // marginBottom: { xs: 5 }
                }}>
                  More recipes!!
                </Button>
              </Box>

            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={7} lg={9.5}
          // lg={9} xl={10} 
          sx={{
            // backgroundColor: 'green',
            p: 4,
            // border: 15,
            borderLeft: 15,
            borderTop: 15,
            borderBottom: 15,
            borderColor: 'rgba(68, 68, 68, 0.15)'

            // pl:70
            // maskImage: 'radial-gradient(circle 10px at 0 0, transparent 0, transparent 100px, black 21px)',
          }}>
          {/* <Typography>I don't know what I can eat, help!!</Typography>
          <Typography>I don't know what I can eat, help!!</Typography>
          <Typography>I don't know what I can eat, help!!</Typography>
          <Typography>I don't know what I can eat, help!!</Typography>
          <Typography>I don't know what I can eat, help!!</Typography>
          <Typography>I don't know what I can eat, help!!</Typography> */}

          <Box sx={{
            height: '100%',
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}>
            <Box className='ql-editor' ref={boxToPreviewRef} sx={{ mb: 3, }} />
          </Box>

        </Grid>


      </Grid>
    </>
  )
}

export default RecipesScreen;