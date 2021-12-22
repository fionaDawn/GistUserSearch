import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from '../Router';



function App() {
  const myTheme = createTheme({
    // Theme settings
    palette: {
      type: "dark",
    }
  });

  return <ThemeProvider theme={myTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>

}

export default App;
