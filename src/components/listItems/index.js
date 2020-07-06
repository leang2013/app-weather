import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListItems() {
  const classes = useStyles();

  const values = JSON.parse(localStorage.getItem('last5Searches')) || [];

  return (
    <>
      { values.length > 0 && (
      <div className={classes.root}>
        <Divider />
        <List
          component="nav"
          aria-label="main mailbox folders"
          subheader={(
            <ListSubheader component="div" id="nested-list-subheader">
              Last 5 searches
            </ListSubheader>
        )}
        >
          {
            values.map((value, index) => (
              <div key={`item-${value[0]}-${index}}`}>
                <Link to={`detail/${value[1]}`}>
                  <ListItem button>
                    <ListItemText primary={value[0]} />
                  </ListItem>
                </Link>
              </div>
            ))
          }
        </List>
      </div>
      )}
    </>
  );
}
