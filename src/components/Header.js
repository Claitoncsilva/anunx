import React , { useState  } from 'react';
import { useSession , signOut} from "next-auth/react"
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';


import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider
} from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6,
  },
  divider: {
    margin: '8px 0'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorUserMenu, SetAnchorUserMenu] = useState(false)
  const { data: session } = useSession()

  const openUserMenu = Boolean(anchorUserMenu);
  


  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            <Link href={session ? '/user/publish': 'auth/signin'} passHref>
              <Button color="inherit" variant="outlined">
                Anunciar e Vender
              </Button>
            </Link>  
            <IconButton color="secondary" onClick={(e) => SetAnchorUserMenu(e.currentTarget)}>
              {
                session
                ? <Avatar src={session.user.image} />
                : <AccountCircle />  
              }
              <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                
              </Typography>  
            </IconButton>  

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => SetAnchorUserMenu(null)}
              anchorOrigin={{
                vertical:'top',
                horizontal:'right',
              }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>  
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>  
              <Divider  className={classes.divider}/>
              <MenuItem onClick={() => signOut({ 
                callbackUrl: '/'
               })} >Sair</MenuItem>
            </Menu>
            
          </Toolbar>
        </Container>  
      </AppBar>
    </>
  );
}
