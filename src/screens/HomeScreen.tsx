import { Box, Button, Grid, Typography } from '@mui/material';
import vegetables from '../assets/vegetables.svg'

export const HomeScreen = () => {

  return (
    <>
      <Grid
        container
      >
        <Grid
          item
          xs={12}
          sm={6}
          order={{ xs: 2, sm: 1 }}
          sx={{
            display: "flex", flexDirection: "column"
          }}
        >
          <Box m="auto">
            <Typography variant='h3' sx={{mt: {xs: 5}}}>Healthy Food</Typography>
            <Typography variant='h3'>For Us!!</Typography>
            <Typography variant="body1" fontSize={22} sx={{ mt: 3 }}>What better way to eat if it</Typography>
            <Typography variant="body1" fontSize={22}>is healthy, our bodies</Typography>
            <Typography variant="body1" fontSize={22}>will thank you.</Typography>

            <Button variant="contained" color={'secondary'}
              sx={{
                mt: 5,
                ml: 15,
                textTransform: 'initial',
                height: 50,
                width: 150,
                borderRadius: 3,
                color: 'white',
                fontSize: 22,
                fontWeight: 900,
                marginBottom: { xs: 5 }
              }}>
              Get in
            </Button>
          </Box>

        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          order={{ xs: 1, sm: 2 }}
        >
          {/*         
            // xs, extra-small: 0px-600px
            // sm, small: 600px-900px
            // md, medium: 900px-1200px
            // lg, large: 1200px-1536px
            // xl, extra-large: ~1536px 
          */}

          <Box
            sx={{
              // minHeight: { sm: 'calc(100vh - 65px)', md: 'calc(100vh - 65px)', lg: 'calc(100vh - 65px)', xl: 'calc(100vh - 65px)' },
              // minWidth: '50vw',
              // display: 'flex',
              // justifyContent: 'center'
            }}
          >

            <Box
              sx={{
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${vegetables})`,
                backgroundSize: '100% 100%',
                // maxHeight: { xs: '100%', sm: '100%', md: '100%', lg: 800 },

                // color: defaultColor,
                // backgroundColor: defaultBgcolor,
                // ...(job.status === 'aborted' && {
                //   color: color1,
                //   backgroundColor: bgcolor1,
                // }),
                
                maxWidth: { lg: 'calc(100vh - 65px)' },
                minHeight: { xs: 400, sm: 'calc(100vh - 128px)', md: 'calc(100vh - 128px)', lg: 'calc(100vh - 128px)', xl: 'calc(100vh - 128px)' },
                minWidth: { xs: 300, sm: 450 },
                // marginBottom: { xs: 5 }
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default HomeScreen;

