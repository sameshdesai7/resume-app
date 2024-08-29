import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import {theme} from './Services/themeProvider';
import AppBar from './custom-components/appbar';

/**
 * App is the main component of the application.
 * It renders a hamburger-shaped icon, which is a placeholder for the actual
 * application content.
 */
function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <Box>
        <AppBar></AppBar>
        <Homepage></Homepage>
      </Box>
    </ThemeProvider>
  );
}

export default App;
