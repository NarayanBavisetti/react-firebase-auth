import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
const {user} = useAuth()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.title}>News</Link>
         <Link to="/users"><Button variant="outlined" color="secondary" >Users </Button></Link> 
         {user ?<Link to="/profile"><Button variant="outlined" color="secondary"  >Profile </Button> </Link> :<Link to="/login"> <Button variant="outlined" color="secondary" >Login / Sign Up</Button></Link> } 
        </Toolbar>
      </AppBar>
    </div>
  );
}
