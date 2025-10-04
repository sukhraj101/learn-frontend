// components/Layout.jsx
// import { AppBar, Toolbar, Box } from '@mui/material'
import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  return (
    <>
      {/* <AppBar position="fixed" color="white.main" sx={{ top: 0, boxShadow: 0 }} className="headerTop">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <NavLink to="/">
            <img src="logo.svg" alt="Logo" style={{ height: 40 }} />
          </NavLink>

          <Box component="nav" aria-label="Main navigation">
            <ul className="main-menu" style={{listStyleType: 'none', padding: 0, margin: 0, display: "flex", gap: "1rem"}}>
              <li>
                <NavLink to="/" aria-label="Go to home page">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" aria-label="Learn more about us">About</NavLink>
              </li>
              <li>
                <NavLink to="/category" aria-label="View all categories">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/category/html" aria-label="View HTML category">HTML</NavLink>
              </li>
              <li>
                <NavLink to="/category/css" aria-label="View CSS category">CSS</NavLink>
              </li>
              <li>
                <NavLink to="/category/javascript" aria-label="View JavaScript category">JavaScript</NavLink>
              </li>
              <li>
                <NavLink to="/category/react" aria-label="View React category">React</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar> */}
        
        <main>
        {/* This is where nested routes will render */}
        <Outlet />
        </main>
    </>
  )
}
export default Layout