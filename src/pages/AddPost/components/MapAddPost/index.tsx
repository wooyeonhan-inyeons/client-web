import React, { useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useOutletContext } from "react-router";
// import { Map, MapProvider } from "react-map-gl";
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  MapRef,
  Marker,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { LocationProps } from "../../../../interface";
// import MarkerImage from "./marker.png";
import { getCurrentGeocode, getCurrentLocation } from "./utils";
import { PostStateInterface } from "../HeaderAddPost/interface";
import markerImg from "/src/asset/marker.png";

// 마커 표시
// 일단 지도 컨트롤러 UI 수정은 우선순위 미뤄둠..

const initPosition = {
  longitude: 127.9068,
  latitude: 35.6699,
  zoom: 6,
};

const MapAddPost = () => {
  const { post, setPost } = useOutletContext<PostStateInterface>();
  const mapRef = useRef<MapRef | null>(null);
  const [viewState, setViewState] = React.useState(initPosition);

  // 사용자의 위치정보 가져와서 viewport에 저장
  useEffect(() => {
    if (positionRef.current == initPosition) {
      getCurrentLocation({ setViewState });
    }
    console.log("viewstate: ", viewState);
    console.log("navigator: ", navigator);
  }, [navigator]);

  const [geocode, setGeocode] = useState<string | undefined>(undefined);
  const positionRef = useRef<LocationProps | undefined>(initPosition);
  const theme = useTheme();

  // 받아온 위치 정보를 한글주소체계로 변환 후 post에 저장
  useEffect(() => {
    positionRef.current = viewState;
    if (positionRef.current !== undefined) {
      getCurrentGeocode(positionRef.current).then((e) => {
        setGeocode(e.reverse().join(" "));
      });
    }

    // post state 저장
    setPost((prevState) => ({
      ...prevState,
      latitude: viewState?.latitude,
      longitude: viewState?.longitude,
      address: geocode,
    }));

    console.log("지도 정보입력 후: ", post); // 이게 엄청 많이 리렌더링 됨
  }, [viewState]);

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
        {positionRef.current !== initPosition ? (
          <Map
            ref={mapRef}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
            style={{
              backgroundColor:
                theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
            }}
            mapLib={mapboxgl}
          >
            <GeolocateControl
              trackUserLocation={true}
              showUserLocation={true} // default
              positionOptions={{ enableHighAccuracy: true }}
              fitBoundsOptions={{ maxZoom: 15 }} // maxZoom이 어느정도인지 확인하고 다시 설정
            />
            <NavigationControl />
            <Marker
              longitude={viewState.longitude}
              latitude={viewState.latitude}
              anchor="center"
            >
              <img src={markerImg} alt="marker" />
            </Marker>
          </Map>
        ) : (
          <Skeleton
            variant="rectangular"
            height={400}
            sx={{ maxHeight: "65vh" }}
          />
        )}
      </Box>
    </Box>
  );
};

export default MapAddPost;
