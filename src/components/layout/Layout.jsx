// components/Layout.jsx
import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Container, IconButton, Drawer, List, ListItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import './layout.scss';

const menuList = [
  { id: 1, name: 'React', slug: 'react' },
  { id: 2, name: 'JavaScript', slug: 'javascript' },
  { id: 3, name: 'Next.js', slug: 'next' }
];


function Layout() {
  const theme = useTheme();
  const location = useLocation();
  const appColor = location.pathname !== '/' ? 'dark' : 'white';

  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => {
      setOpen(state);
  };

  return (
    <>
      <AppBar position="static" color={appColor} elevation={0} className="headerTop" component="header">
        <Container className="custom">
          <Toolbar sx={{ justifyContent: "space-between", padding: '0px !important' }}>
            <NavLink to="/" className="site__title">
              <Typography variant='span'>Lycronix</Typography>
            </NavLink>

            <Box component="nav" aria-label="Main navigation" sx={{ marginLeft: 'auto', marginRight: '20px' }}>
              <ul className="main-menu" style={{listStyleType: 'none', padding: 0, margin: 0, display: "flex", gap: "1rem"}}>
                <li>
                  <NavLink to="/category/javascript" aria-label="View JavaScript category">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/category/react" aria-label="View React category">Login</NavLink>
                </li>
              </ul>
            </Box>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ p: 0.75 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuList.map((menuItem) => (
            <ListItem button key={menuItem.id}>
              <NavLink to={menuItem.slug} aria-label="View React category" onClick={() => {setOpen(false)}}>{menuItem.name}</NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
        
      <main>
        {/* This is where nested routes will render */}
        <Outlet />
      </main>

      <Box component="footer" sx={{ background: theme.palette.dark.main, paddingTop: 8, paddingBottom: 2.6 }}>
        <Container className="custom">
          <Box sx={{ maxWidth: "600px", marginInline: "auto" }}>
            <Typography variant="body" component="h2" sx={{ color: theme.palette.dark.contrastText, textAlign: "center" }} gutterBottom>Lycronix</Typography>
            <Typography component="p" sx={{ color: alpha(theme.palette.dark.contrastText, 0.7), fontSize: "16px", fontWeight: "200", textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse dignissimos voluptatibus sit, eius aperiam odio. Nostrum ullam soluta perspiciatis.
            </Typography>
          </Box>
        </Container>
        <Box sx={{ borderTop: `1px solid ${alpha(theme.palette.dark.contrastText, 0.2)}`, paddingTop: "20px", marginTop: "40px" }}>
          <Container className="custom">
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction={{ xs: "column", md: "row" }}
              useFlexGap
              sx={{ flexWrap: 'wrap', justifyContent: "space-between" }}
            >
              <Typography component="p" sx={{ color: alpha(theme.palette.dark.contrastText, 0.7), fontSize: "14px", fontWeight: "200", textAlign: { xs: "center", sm: "left" } }}>
                All rights reserved. &copy; copyright 2025
              </Typography>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap', justifyContent: { xs: "center", sm: "space-between" }, maxWidth: "400px" }}
              >
                <a
                  href="https://www.facebook.com"
                  aria-label="Visit our Facebook page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon sx={{ color: alpha(theme.palette.dark.contrastText, 0.7), fontSize: '18px' }} />
                </a>

                <a
                  href="https://www.instagram.com"
                  aria-label="Visit our Instagram page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ color: alpha(theme.palette.dark.contrastText, 0.7), fontSize: '18px' }} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  aria-label="Visit our LinkedIn page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ color: alpha(theme.palette.dark.contrastText, 0.7), fontSize: '18px' }} />
                </a>

                <a
                  href="https://www.twitter.com"
                  aria-label="Visit our Twitter/X page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon sx={{ color: alpha(theme.palette.dark.contrastText, 0.7), fontSize: '18px' }} />
                </a>

              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  )
}
export default Layout