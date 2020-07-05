import React from 'react';
import propTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({
  name,
  lat,
  lng,
}) => {
  const mapStyles = {
    height: '100vh',
    width: '70%',
  };

  const defaultCenter = {
    lat, lng,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker key={name} position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

Map.defaultProps = {
  name: '',
  lat: '',
  lng: '',
};

Map.propTypes = {
  name: propTypes.string,
  lat: propTypes.number,
  lng: propTypes.number,
};

export default Map;
