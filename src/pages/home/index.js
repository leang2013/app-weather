import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from '../../components/search';
import ListItems from '../../components/listItems';
import setValuesStorage from '../../utils';
import dataCities from '../../config/city.list.json';

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
        <Search dataCities={dataCities} setValuesStorage={setValuesStorage} />
      </Grid>
      <Grid item>
        <ListItems />
      </Grid>
    </Grid>
  </>
);

export default Home;
