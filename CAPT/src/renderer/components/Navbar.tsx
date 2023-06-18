import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <PsychologyAltIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Pyschological Test
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Test</Button>
        <Button color="inherit">Results</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
