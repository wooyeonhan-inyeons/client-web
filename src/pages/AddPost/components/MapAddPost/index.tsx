import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import { Map, MapProvider, Marker } from "react-map-gl";
import { LocationProps } from "../../../../interface";
// import MarkerImage from "./marker.png";
import Geocode from "react-geocode";

// 주소변환 -> 지오코딩
// 마커 표시
// X 아이콘 바꾸기

const MapAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/category");
  };

  const [viewport, setViewport] = useState<LocationProps>({
    latitude: 37.5326,
    longitude: 127.024612,
    zoom: 12,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 15,
      });
    });
  }, []);

  Geocode.setApiKey(import.meta.env.GOOGLE_MAP_API);
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );

  console.log("위치: ", viewport.longitude, viewport.latitude);

  return (
    <div>
      <Typography variant="h5">지도를 움직여 추가할</Typography>
      <Typography variant="h5">우연의 장소를 지정해 주세요</Typography>
      <Typography variant="subtitle1" sx={{ color: "#A2A2A2" }}>
        대구광역시 달서구 신당동
      </Typography>
      <MapProvider>
        <Map
          initialViewState={{
            longitude: 127.9068,
            latitude: 35.6699,
            zoom: 6,
          }}
          {...viewport}
          mapboxAccessToken={import.meta.env.VITE_MAP_API}
          mapStyle="mapbox://styles/mapbox/light-v9"
          style={{ width: "100%", height: 600 }}
        >
          <Marker
            longitude={viewport.longitude}
            latitude={viewport.latitude}
            draggable={true}
            // onDragEnd={handleMarkerDragEnd}
          >
            <span role="img" aria-label="marker">
              📍
            </span>
          </Marker>
        </Map>
      </MapProvider>
      <SaveBtn text="다음" onClick={handleNext} />
    </div>
  );
};

export default MapAddPost;
