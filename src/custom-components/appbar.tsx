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
import LinkedInLogo from '../assets/linkedInLogo.png';
import GitHubLogo from '../assets/GitHubLogo2.png';
import VSCOLogo from '../assets/VSCOLogo.png';

import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';

const pages = ['Skills', 'Tools', 'Projects'];
const sectionLinks = [
  {name: 'Skills', link: '#Skills'},
  {name: 'Tools', link: '#Tools'},
  {name: 'Projects', link: '#Projects'},
];
const links = [
  {name: 'GitHub', icon: GitHubLogo, link: 'https://github.com/sameshdesai7'},
  {name: 'Linkedin', icon: LinkedInLogo, link: 'https://www.linkedin.com/in/sameshdesai'},
  // {name: 'VSCO', icon: VSCOLogo, link: 'https://vsco.co/samdesaii/gallery'},
];

export default function ResponsiveAppBar() {

    return (
      <AppBar position="static">

        <Box>
        
        </Box>
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
                <Link
                  key={page}
                  activeClass="active"
                  to={sectionLinks.find(link => link.name === page)?.link ?? '#'}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: { xs: 'center', md: 'flex-end' }, gap: 2 }}>
              {links.map((link) => (
                <Button
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"

                  sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
                >
                  <img src={link.icon} alt={link.name} style={{ width: "30px", height: "30px", marginRight: "0px", filter: "brightness(0) invert(1)" }} />
                  <Typography display={{ xs: 'none', md: 'flex' }} variant="body1" component="span" sx={{ml: 1}}>{link.name}</Typography>
                </Button> 
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}