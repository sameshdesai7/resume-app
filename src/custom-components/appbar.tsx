import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Timeline', 'Projects', 'Skills', 'Hobbies'];
const links = [
  {name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'},
  {name: 'Linkedin', icon: 'https://cdn-icons-png.flaticon.com/512/61/61110.png'},
  {name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/87/87390.png'},
];

export default function ResponsiveAppBar() {

    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Typography
              
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              .AboutMe
            </Typography>


            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}

                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: { xs: 'center', md: 'flex-end' }}}>
              {links.map((link) => (
                <Button
                  key={link.name}
                  href={`https://www.${link.name.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"

                  sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
                >
                  <img src={link.icon} alt={link.name} style={{ width: "30px", height: "30px", marginRight: "10px", filter: "brightness(0) invert(1)" }} />
                  <Typography display={{ xs: 'none', md: 'flex' }} variant="body1" component="span" sx={{ml: 1}}>{link.name}</Typography>
                </Button> 
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}