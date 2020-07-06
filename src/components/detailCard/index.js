import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import propTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import urls from '../../config/urls';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  action: {
    textAlign: 'center',
  },
});

export default function DetailCard({ name, data }) {
  const {
    feels_like,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
  } = data;

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="h6" component="h3">
          Now
        </Typography>
        <Typography variant="body2" component="p">
          Feels Like :
          {' '}
          {feels_like}
          {' '}
          °C
        </Typography>
        <Typography variant="body2" component="p">
          Humidity :
          {' '}
          {humidity}
          {' '}
          %
        </Typography>
        <Typography variant="body2" component="p">
          Pressure :
          {' '}
          {pressure}
          {' '}
          hPa
        </Typography>
        <Typography variant="body2" component="p">
          Temperature :
          {' '}
          {temp}
          {' '}
          °C
        </Typography>
        <Typography variant="body2" component="p">
          Max. Temperature :
          {' '}
          {temp_max}
          {' '}
          °C
        </Typography>
        <Typography variant="body2" component="p">
          Min. Temperature :
          {' '}
          {temp_min}
          {' '}
          °C
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={urls.getMoreInformation(name)}>More Information</Button>
      </CardActions>
    </Card>
  );
}

DetailCard.defaultProps = {
  name: '',
  data: {},
};

DetailCard.propTypes = {
  name: propTypes.string,
  data: propTypes.object,
};
