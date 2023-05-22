import * as React from "react";
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { Box } from "@mui/material";
const MapComponent = () => {
  return (
    <>
      <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Map
          initialViewState={{
            latitude: 40,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0,
          }}
          mapLib={mapboxgl}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={import.meta.env.VITE_MAP_API}
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />

          {/* {pins} */}
        </Map>
      </Box>
    </>
  );
};

export default MapComponent;
