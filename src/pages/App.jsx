import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import UserSearch from '../components/UserSearch';

function App() {
  const myTheme = createTheme({
    // Theme settings
    palette: {
      type: "dark",
    }
  });

  return <ThemeProvider theme={myTheme}>
    <UserSearch />
  </ThemeProvider>

}

export default App;
