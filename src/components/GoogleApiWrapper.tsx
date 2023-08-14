import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: 644,
  height: 410
};

interface MapProps {
  google: any;
}

const MapContainer: React.FC<MapProps> = ({ google }) => {
  return (
    <Map
      google={google}
      style={mapStyles}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233
      }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBETfoESraRf5ChhqHzWp8Etn_HtELU_9w'
})(MapContainer)