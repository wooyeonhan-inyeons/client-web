import React, { useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useOutletContext } from "react-router";
import { Map, MapRef, Marker, ViewStateChangeEvent } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { getCurrentGeocode, getCurrentLocation } from "./utils";
import { PostStateInterface } from "../../interface";
import markerImg from "/src/asset/marker.png";
import { LocationProps } from "../../../../interface";
import { defaultPosition } from "../../../../component/MainWrapper/index";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

const MapAddPost = () => {
  const { setPost, initPosition } = useOutletContext<PostStateInterface>();
  const mapRef = useRef<MapRef | null>(null);
  const [viewState, setViewState] = React.useState<LocationProps>(initPosition);
  const [geocode, setGeocode] = useState<string>("");
  const positionRef = useRef<LocationProps>(initPosition);
  const theme = useTheme();
  const getAddress = () => {
    console.log("getAddress");
    if (positionRef.current !== initPosition || geocode === "") {
      getCurrentGeocode(positionRef.current).then((e) => {
        setGeocode(e.reverse().join(" "));
      });
    }
  };

  // 사용자의 위치정보 가져와서 viewport에 저장
  useEffect(() => {
    if (positionRef.current !== initPosition) {
      getCurrentLocation({ setViewState });
    }
  }, [navigator]);

  useEffect(() => {
    getAddress();
  }, []);

  useEffect(() => {
    positionRef.current = viewState;
  }, [viewState]);

  useEffect(() => {
    // post state 저장
    setPost((prevState) => ({
      ...prevState,
      latitude: viewState?.latitude,
      longitude: viewState?.longitude,
      address: geocode,
    }));
  }, [geocode]);

  useEffect(() => {
    if (mapRef.current === null) return;
    const language = new MapboxLanguage();
    mapRef.current.addControl(language);
  }, [mapRef.current]);

  return (
    <Box
      sx={{
        padding: "1rem 0",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        //우선 스타일로 지도 아래에 있던 객체들 '가림'
        "& .mapboxgl-ctrl, & .mapboxgl-ctrl-logo ": {
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

      <Box
        padding={0}
        sx={{
          width: "100%",
          maxWidth: 500,
          "@media (max-width: 375px)": {
            height: 350,
          },
          height: 530,
          overflow: "hidden",
        }}
      >
        {positionRef.current !== defaultPosition ? (
          <Map
            id="map"
            ref={mapRef}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            {...viewState}
            onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v10`}
            style={{
              backgroundColor:
                theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
            }}
            mapLib={mapboxgl}
            //touch 종료 때 마다 이벤트 실행
            onTouchEnd={getAddress}
          >
            <Marker
              longitude={viewState.longitude}
              latitude={viewState.latitude}
              anchor="center"
            >
              <img src={markerImg} alt="marker" style={{ width: "2.5rem" }} />
            </Marker>
          </Map>
        ) : (
          <Skeleton
            variant="rectangular"
            height={600}
            sx={{ maxHeight: "65vh" }}
          />
        )}
      </Box>
    </Box>
  );
};

export default MapAddPost;
