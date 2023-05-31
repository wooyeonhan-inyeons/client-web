import React, { useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useOutletContext } from "react-router";
// import { Map, MapProvider } from "react-map-gl";
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";

import { LocationProps } from "../../../../interface";
// import MarkerImage from "./marker.png";
import { getCurrentGeocode, getCurrentLocation } from "./utils";
import { PostStateInterface } from "../HeaderAddPost/interface";

// 마커 표시
// initstate를 현재위치로 주고
// 손으로 이동할때 지도의 중앙 좌표를 set

const initPosition = {
  longitude: 127.9068,
  latitude: 35.6699,
  zoom: 6,
};

const MapAddPost = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: 127.9068,
    latitude: 35.6699,
    zoom: 6,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setViewport((prevViewport) => ({
          ...prevViewport,
          latitude,
          longitude,
        }));
      });
    }
    console.log("viewport: ", viewport);
  }, [navigator]);

  const { post, setPost } = useOutletContext<PostStateInterface>();
  // const [viewport, setViewport] = useState<LocationProps | undefined>(
  //   undefined
  // );

  const [geocode, setGeocode] = useState<string | undefined>(undefined);
  const positionRef = useRef<LocationProps | undefined>(initPosition);
  const theme = useTheme();

  // useEffect(() => {
  //   if (positionRef.current == initPosition) {
  //     getCurrentLocation({ setViewport });
  //   }
  // }, [navigator]);

  useEffect(() => {
    positionRef.current = viewport;
    if (positionRef.current !== undefined) {
      getCurrentGeocode(positionRef.current).then((e) => {
        setGeocode(e.reverse().join(" "));
      });
    }

    // post state 저장
    setPost((prevState) => ({
      ...prevState,
      latitude: viewport?.latitude,
      longitude: viewport?.longitude,
      address: geocode,
    }));

    console.log("지도 정보입력 후: ", post);
  }, [viewport, positionRef, geocode]);

  return (
    <Box
      sx={{
        padding: "1rem 0",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        //우선 스타일로 지도 아래에 있던 객체들 '가림'
        "& .mapboxgl-ctrl-fullscreen, & .mapboxgl-ctrl-compass, & .mapboxgl-ctrl.mapboxgl-ctrl-scale, & .mapboxgl-ctrl-attrib-button, & .mapboxgl-ctrl-attrib-inner, & .mapboxgl-ctrl-logo ":
          {
            display: "none",
          },
      }}
    >
      <Box sx={{ padding: "1rem 1.5rem" }}>
        <Typography variant="h5" fontWeight={600}>
          지도를 움직여 추가할 <br />
          우연의 장소를 지정해 주세요
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#A2A2A2" }}>
          {geocode ? (
            geocode
          ) : (
            <Skeleton variant="text" animation="wave" width={250} />
          )}
        </Typography>
      </Box>

      <Box padding={0}>
        {positionRef.current !== initPosition ? (
          <Map
            initialViewState={{
              ...viewport,
              bearing: 0,
              pitch: 0,
            }}
            // {...viewport}
            // onViewportChange={(newViewport) => setViewport(newViewport)}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
            style={{
              width: "100%",
              height: "500px",
              maxHeight: "55vh",
              // overflow: "hidden",
              backgroundColor:
                theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
            }}
            mapLib={mapboxgl}
          >
            <GeolocateControl
              position="top-left"
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              showUserLocation={true}
            />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
            <ScaleControl />
            {/* {pins} */}
          </Map>
        ) : (
          <Skeleton
            variant="rectangular"
            // height={400}
            sx={{ maxHeight: "65vh" }}
          />
        )}
      </Box>
    </Box>
  );
};

export default MapAddPost;
