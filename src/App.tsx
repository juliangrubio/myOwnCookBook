import { ReactNode, useContext } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { UIContext, UIProvider } from './context/ui';
import { darkTheme, lightTheme } from './themes';
import { Navigation } from './routes';


const AppState = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(UIContext);
  return (
    <ThemeProvider theme={(theme === 'light') ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <>
      <UIProvider>
        <AppState>
          <CssBaseline />
          <Navigation />
        </AppState>
      </UIProvider>
    </>
  );
}

export default App;
