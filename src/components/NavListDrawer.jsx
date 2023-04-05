import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import LoginOutlined from '@mui/icons-material/LoginOutlined'


export const NavListDrawer = ({ component, setOpen}) => {

    const navegationLinks = [
        {
            titulo: "Home", ruta: "/", icon: <HomeIcon/>,
        },
        {
            titulo: "Login",ruta: "/login", icon: <LoginOutlined/>,
        },
        {
            titulo: "Register", ruta: "/register", icon: <CreateIcon/>,
        }  
    ]


  return (
    <>
        <Box sx={{ width: 250, }} >
            <nav>
                <List>
                    {
                        navegationLinks.map(item => (
                            <ListItem disablePadding key={item.titulo}>
                        <ListItemButton component={component} to={item.ruta} onClick={() => setOpen(false)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.titulo} />
                        </ListItemButton>
                    </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    </>
  )
}
