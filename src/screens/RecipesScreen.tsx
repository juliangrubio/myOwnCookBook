import { Grid, Box, Typography, Button, useMediaQuery, useTheme, CircularProgress } from '@mui/material';
import { useEffect, useRef, useState, useContext } from 'react';
import { CardList } from '../components';
import { RecipeContextMyOwnChefBook } from '../context/recipesMyOwnChefBookApi';
import { SearchIcon } from '../icons';

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
  const { recetas } = useContext(RecipeContextMyOwnChefBook);

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
              {
                (recetas.length !== 0)
                  ? <CardList
                    handleChangeValueRecipe={handleChangeValueRecipePreview}
                    data={recetas}
                  />
                  : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                  </Box>
              }
            </Grid>

            <Grid item sx={{
              // mt: 0
              // backgroundColor: 'red',
              borderTopRightRadius: 10
            }}>

              <Typography align="center" sx={{
                animation: isBlinking ? 'blink 1.5s infinite' : 'none',
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