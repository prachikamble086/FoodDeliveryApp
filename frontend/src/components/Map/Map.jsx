import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const mcdCoordinates = [19.075989, 72.877655];

const Map = () => {
  return (
    <div className="map-wrapper">
      <div className="info-box">
        <h3 className="info-title">McDonald's</h3>
        <p className="info-location">Mumbai, India</p>
        <p className="info-address">Location: Mumbai, Maharashtra, India</p>
        <p className="info-phone">Phone: +91-1234567890</p>
        <a
          href="https://www.mcdonaldsindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="info-link"
        >
          Website
        </a>
      </div>

      <MapContainer center={mcdCoordinates} zoom={15} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mcdCoordinates}>
          <Popup>
            <b>McDonald's</b>
            <p>Mumbai, India</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
