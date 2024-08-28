import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import { Box } from '@mui/material';

/**
 * App is the main component of the application.
 * It renders a hamburger-shaped icon, which is a placeholder for the actual
 * application content.
 */
function App() {
  return (
    <Box>
      <Homepage></Homepage>
    </Box>
  );
}

export default App;
