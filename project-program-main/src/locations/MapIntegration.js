import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import uWaterlooLocations from './uWaterlooLocations';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 43.4723,
  lng: -80.5449
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="075f778f-9892-4cce-a0c4-72256a881125">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {uWaterlooLocations.map((location, index) => (
          <Marker
            key={index}
            position={location.coordinates}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;