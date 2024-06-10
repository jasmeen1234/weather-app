import React from 'react';
import Home from "./pages/Home";
import ThemeToggleProvider from './ThemeContext';
import { Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeToggle } from './ThemeContext';
const ThemeToggleButton = () => {
  const { mode, toggleTheme } = useThemeToggle();

  return (
    <Box position="absolute" top={10} right={10}>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

function App() {
  return (
    <ThemeToggleProvider>
      <ThemeToggleButton />
      <Home/>
    </ThemeToggleProvider>
  );
}

export default App;
