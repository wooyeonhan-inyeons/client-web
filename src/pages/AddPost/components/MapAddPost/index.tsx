import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import ReactMapGL from "react-map-gl";
import { ViewportProps } from "../../../../interface";

// X 아이콘 바꾸기

interface Location {
  latitude: number | undefined;
  longitude: number | undefined;
  error: string | undefined;
}

const MapAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/category");
  };

  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState<Location>({
    latitude: 37.5326,
    longitude: 127.024612,
    error: undefined,
  });

  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 37.5326,
    longitude: 127.024612,
    zoom: 12,
  });

  console.log(location.longitude, location.latitude);

  useEffect(() => {
    setViewport({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 12,
    });
    console.log(import.meta.env.VITE_MAP_API);
  }, []);

  return (
    <div>
      <Typography variant="h5">지도를 움직여 추가할</Typography>
      <Typography variant="h5">우연의 장소를 지정해 주세요</Typography>
      <Typography variant="subtitle1" sx={{ color: "#A2A2A2" }}>
        대구광역시 달서구 신당동
      </Typography>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={import.meta.env.VITE_MAP_API}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{ width: 400, height: 600 }}
      ></ReactMapGL>
      <SaveBtn text="다음" onClick={handleNext} />
    </div>
  );
};

export default MapAddPost;
