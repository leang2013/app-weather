import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from '../../components/search';
import ListItems from '../../components/listItems';

const Home = () => (
  <>
    <Grid
      container
      spacing={5}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Search />
      </Grid>
      <Grid item>
        <ListItems />
      </Grid>
    </Grid>
  </>
);

export default Home;
