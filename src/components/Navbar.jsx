import { useState } from 'react';
import { AppBar,Button,Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { NavListDrawer } from './NavListDrawer';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <AppBar position="static">
            <Toolbar>
                <IconButton color='inherit' size='large' onClick={() => setOpen(true)} sx={{ display: {xs: "flex", sm: "none"} }}>
                    <MenuIcon />
                </IconButton>

                <Typography variant='h6' sx={{flexGrow: 1}} >NavBar</Typography>
                <Box sx={{ display: {xs: "none", sm: "block"} }}>
                   
                <NavLink
                    to="/"
                    style={{ textDecoration: "none" }}
                >
                    {({ isActive }) => (
                        <Button
                            color="inherit"
                            sx={{
                                pt: 1,
                                color: isActive ? "salmon" : "white",
                            }}
                            >
                            Home
                        </Button>
                    )}
                 </NavLink> 

                 <NavLink
                    to="/login"
                    style={{ textDecoration: "none" }}
                >
                    {({ isActive }) => (
                        <Button
                            color="inherit"
                            sx={{
                                pt: 1,
                                color: isActive ? "salmon" : "white",
                            }}
                            >
                            Login
                        </Button>
                    )}
                </NavLink>
                <NavLink
                    to="/register"
                    style={{ textDecoration: "none" }}
                >
                    {({ isActive }) => (
                        <Button
                            color="inherit"
                            sx={{
                                pt: 1,
                                color: isActive ? "salmon" : "white",
                            }}
                            >
                           Register
                        </Button>
                    )}
                </NavLink> 
               </Box> 
            </Toolbar>
        </AppBar>

        <Drawer open={open} anchor="left" onClose={() => setOpen(false) } sx={{ display: {xs: "flex", sm: "none"} }} >
             <NavListDrawer component={NavLink} setOpen={setOpen} />
        </Drawer>
       
    </>
  )
}
