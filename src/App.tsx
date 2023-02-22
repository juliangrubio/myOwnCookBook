import { CssBaseline, ThemeProvider } from '@mui/material';
import { MainLayout } from './Layouts';
import { darkTheme, lightTheme } from './themes';
import { HomeScreen } from './screens/HomeScreen';

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <MainLayout>
          <HomeScreen />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
