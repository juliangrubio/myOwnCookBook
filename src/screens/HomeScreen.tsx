import { Box, Button, Grid, Typography } from '@mui/material';
import vegetables from '../assets/vegetables.svg'
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} sx={{
          display: "flex", flexDirection: "column"
        }}>
          <Box m="auto">
            <Typography variant='h3' sx={{ mt: { xs: 5 } }}>Healthy Food</Typography>
            <Typography variant='h3'>For Us!!</Typography>
            <Typography variant="body1" fontSize={22} sx={{ mt: 3 }}>What better way to eat if it</Typography>
            <Typography variant="body1" fontSize={22}>is healthy, our bodies</Typography>
            <Typography variant="body1" fontSize={22}>will thank you.</Typography>

            <Button variant="contained" color={'secondary'} onClick={() => navigate('/recipes')} sx={{
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

        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Box>
            <Box sx={{
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${vegetables})`,
              backgroundSize: '100% 100%',
              maxWidth: { lg: 'calc(100vh - 65px)' },
              minHeight: { xs: 400, sm: 'calc(100vh - 128px)', md: 'calc(100vh - 128px)', lg: 'calc(100vh - 128px)', xl: 'calc(100vh - 128px)' },
              minWidth: { xs: 300, sm: 450 },
            }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default HomeScreen;

