import React, { useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import { Map, MapProvider } from "react-map-gl";
import { LocationProps } from "../../../../interface";
// import MarkerImage from "./marker.png";
import { getCurrentGeocode, getCurrentLocation } from "./utils";

// 주소변환 -> 지오코딩
// 마커 표시
// X 아이콘 바꾸기

const initPosition = {
  longitude: 127.9068,
  latitude: 35.6699,
  zoom: 6,
};

const MapAddPost = () => {
  const [viewport, setViewport] = useState<LocationProps | undefined>(
    undefined
  );
  const [geocode, setGeocede] = useState<string | undefined>(undefined);
  const positionRef = useRef<LocationProps | undefined>(initPosition);
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
  }, [viewport, positionRef]);

  return (
    <Box
      sx={{
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        //우선 스타일로 지도 아래에 있던 객체들 '가림'
        "& .mapboxgl-ctrl ": {
          display: "none",
        },
      }}
    >
      <Box>
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
          <MapProvider>
            <Map
              initialViewState={{
                longitude: 128.4936,
                latitude: 35.8555,
                zoom: 6,
              }}
              {...viewport}
              mapboxAccessToken={import.meta.env.VITE_MAP_API}
              mapStyle="mapbox://styles/mapbox/light-v9"
              style={{
                width: "100%",
                height: "400px",
                maxHeight: "50vh",
                overflow: "hidden",
                backgroundColor: "#f6f6f4",
              }}
            >
              {/* <Marker
                longitude={viewport.longitude}
                latitude={viewport.latitude}
                draggable={true}
                // onDragEnd={handleMarkerDragEnd}
              >
                <span role="img" aria-label="marker">
                  📍
                </span>
              </Marker> */}
            </Map>
          </MapProvider>
        ) : (
          <Skeleton
            variant="rectangular"
            height={400}
            sx={{ maxHeight: "50vh" }}
          />
        )}
      </Box>

      <Box>
        <SaveBtn text="다음" onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default MapAddPost;
