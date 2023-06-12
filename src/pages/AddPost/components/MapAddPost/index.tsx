import React, { useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useOutletContext } from "react-router";
import { Map } from "react-map-gl";
import { MapRef, Marker, ViewStateChangeEvent } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { getCurrentGeocode, getCurrentLocation } from "./utils";
import { PostStateInterface } from "../../interface";
import markerImg from "/src/asset/marker.png";
import { LocationProps } from "../../../../interface";

// 마커 표시
// 일단 지도 컨트롤러 UI 수정은 우선순위 미뤄둠..

const MapAddPost = () => {
  const initPosition = {
    longitude: 127.9068,
    latitude: 35.6699,
    zoom: 6,
  };
  const { setPost } = useOutletContext<PostStateInterface>();
  const mapRef = useRef<MapRef | null>(null);
  const [viewState, setViewState] = React.useState(initPosition);

  // 사용자의 위치정보 가져와서 viewport에 저장
  useEffect(() => {
    if (positionRef.current == initPosition) {
      getCurrentLocation({ setViewState });
    }
  }, [navigator]);

  const [geocode, setGeocode] = useState<string | undefined>(undefined);
  const positionRef = useRef<LocationProps | undefined>(initPosition);
  const theme = useTheme();

  useEffect(() => {
    positionRef.current = viewState;
  }, [viewState, navigator]);

  useEffect(() => {
    // post state 저장
    setPost((prevState) => ({
      ...prevState,
      latitude: viewState?.latitude,
      longitude: viewState?.longitude,
      address: geocode,
    }));
    // console.log("지도 정보입력 후: ", post);
  }, [geocode]);

  // 받아온 위치 정보를 한글주소체계로 변환 후 post에 저장
  useEffect(() => {
    positionRef.current = viewState;
    if (positionRef.current !== undefined) {
      getCurrentGeocode(positionRef.current).then((e) => {
        setGeocode(e.reverse().join(" "));
        console.log("Geocode: ", e.reverse().join(" "));
      });
    }
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
        {positionRef.current !== initPosition ? (
          <Map
            ref={mapRef}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            {...viewState}
            onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
            style={{
              backgroundColor:
                theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
            }}
            mapLib={mapboxgl}
            // onTouchEnd={() => {
            //   //touch 종료 때 마다 이벤트 실행
            //   if (positionRef.current !== undefined) {
            //     getCurrentGeocode(positionRef.current).then((e) => {
            //       setGeocode(e.reverse().join(" "));
            //     });
            //   }
            // }}
          >
            <Marker
              longitude={viewState.longitude}
              latitude={viewState.latitude}
              anchor="center"
            >
              <img src={markerImg} alt="marker" style={{ width: "2.5rem" }} />
              {/* <Typography variant="h5" sx={{ marginBottom: "40px" }}>
                🍀
              </Typography> */}
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
