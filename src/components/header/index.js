import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/weather.svg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingLeft: 10,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={Logo} height="50" alt="Saxo Logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            My Weather
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
