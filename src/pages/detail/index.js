import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import propTypes from 'prop-types';
import DetailCard from '../../components/detailCard';
import Map from '../../components/map';
import Loading from '../../components/loading';
import getWeatherByCity from '../../services/getWeatherByCity';

const Detail = ({ match }) => {
  const [data, setData] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { id } = match.params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeatherByCity(id);
      setData(response);
      setIsLoaded(true);
    };

    fetchData();
    return () => { setIsLoaded(false); };
  }, [id, match]);

  return (
    <>
      { (!isLoaded) && <Loading /> }
      { isLoaded
                    && (
                    <>
                      <Grid
                        container
                        spacing={5}
                        direction="column"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <DetailCard name={data.name} data={data.main} />
                        </Grid>
                        <Map name={data.name} lat={data.coord.lat} lng={data.coord.lon} />
                      </Grid>
                    </>
                    )}
    </>
  );
};

Detail.defaultProps = {
  match: {},
};

Detail.propTypes = {
  match: propTypes.object,
};

export default Detail;
