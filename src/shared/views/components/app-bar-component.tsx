import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { SelfImprovement } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import UserEntity from '../../models/user-model';
import { useState } from 'react';
import profile from '../../../assets/profile_image.png';
import profile2 from '../../../assets/profile_image_2.webp';


const settings = ['Profile', 'Logout'];

interface Props{
  height?: number;
  user: UserEntity;
}

function ResponsiveAppBar(props: Props) {  
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);  

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { height, user } = props;  

  return (
    <AppBar elevation={3} position="static" sx={{height: height !== undefined ? height : 65}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Link to="/home/"><SelfImprovement color='secondary' sx={{ fontSize: 30, display: { md: 'flex' }, mr: 1 }} /></Link>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,              
              fontFamily: 'Roboto',
              fontWeight: 500,              
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Organize.Me
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile Settings">
              <IconButton onClick={ user != undefined ? handleOpenUserMenu : () => {}} sx={{ p: 0 }}>
                <Avatar alt={user !== undefined ? `${user.firstName} ${user.lastName}` : "No body"} src={user !== undefined ? user.profileImageUrl : profile2} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link style={{ textDecoration: 'none' }} to={`/${setting.toLowerCase()}/`}><Typography textAlign="center">{setting}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;