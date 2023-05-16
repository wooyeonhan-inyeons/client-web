import React, { useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
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
// 레이아웃 수정 (다음 버튼 너비)
// 다크모드 지도 스타일 변경

const initPosition = {
  longitude: 127.9068,
  latitude: 35.6699,
  zoom: 6,
};

const MapAddPost = () => {
  const { post, setPost } = useOutletContext<PostStateInterface>();
  const [viewport, setViewport] = useState<LocationProps | undefined>(
    undefined
  );

  const [geocode, setGeocede] = useState<string | undefined>(undefined);
  const positionRef = useRef<LocationProps | undefined>(initPosition);
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/add-post/category");
  };

  useEffect(() => {
    if (positionRef.current == initPosition) {
      getCurrentLocation({ setViewport });
    }
  }, [navigator]);

  useEffect(() => {
    positionRef.current = viewport;
    if (positionRef.current !== undefined) {
      getCurrentGeocode(positionRef.current).then((e) => {
        setGeocede(e.reverse().join(" "));
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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // height: "100%",
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
          // <MapComponent></MapComponent>
          <Map
            initialViewState={{
              latitude: 35.8555,
              longitude: 128.4936,
              zoom: 6,
              bearing: 0,
              pitch: 0,
            }}
            // {...viewport}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
            style={{
              width: "100%",
              height: "500px",
              maxHeight: "65vh",
              // overflow: "hidden",
              backgroundColor:
                theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
            }}
            mapLib={mapboxgl}
          >
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
            <ScaleControl />
            {/* {pins} */}
          </Map>
        ) : (
          <Skeleton
            variant="rectangular"
            // height={400}
            // sx={{ maxHeight: "50vh" }}
          />
        )}
      </Box>

      <Box
        sx={{
          p: "3rem 1rem 0rem 1rem",
          "@media (max-width: 375px)": {
            pt: "2rem",
            pb: "1rem",
          },
        }}
      >
        <SaveBtn text="다음" onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default MapAddPost;
