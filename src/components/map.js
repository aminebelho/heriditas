import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  return (
    <MapContainer center={[36.7764, 3.0588]} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[36.7764, 3.0588]}>
        <Popup>
          Jamaa El Jedid, Algiers
        </Popup>
      </Marker>
      <Marker position={[36.7765, 3.0589]}>
        <Popup>
          Jamaa El Warlatani, Algiers
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
