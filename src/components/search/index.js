import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import propTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import matchSorter from 'match-sorter';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const CitySelect = ({
  dataCities,
  setValuesStorage,
}) => {
  const [cities, setCities] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();

  const onClose = (event) => {
    if (event.target.href) {
      const id = event.target.href.split('/')[4];
      const name = event.currentTarget.textContent;
      setValuesStorage(name, id);
      setLoading(false);
    }
  };

  const filteredOptions = (event, value) => {
    if (value.length < 3) return;
    let timer = null;

    clearTimeout(timer);
    if (event.type === 'change') {
      setLoading(true);
      // Make a new timeout set to in 700ms
      timer = setTimeout(() => {
        const newOptions = matchSorter(dataCities, value, { keys: ['name'] });
        setCities(newOptions.slice(0, 5));
        setLoading(false);
      }, 700);
    }
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <Typography variant="h4" component="h2">
          Find the weather of any city in the world
        </Typography>
      </div>
      <Autocomplete
        id="city-select"
        freeSolo
        style={{ width: 600 }}
        options={cities}
        onClose={onClose}
        classes={{
          option: classes.option,
        }}
        onInputChange={filteredOptions}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <>
            <Link to={`detail/${option.id}`}>
              {option.name}
              {' '}
              -
              {' '}
              {option.country}
            </Link>
          </>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search City..."
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  );
};

CitySelect.defaultProps = {
  dataCities: [],
  setValuesStorage: '',
};

CitySelect.propTypes = {
  dataCities: propTypes.array,
  setValuesStorage: propTypes.func,
};

export default CitySelect;
