import { setInitPositionType } from "./interface";

export const getCurrentLocation = async ({
  setInitPosition,
}: setInitPositionType) => {
  await navigator.geolocation.getCurrentPosition((position) => {
    setInitPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      zoom: 15,
    });
    console.log("position: ", position.coords);
  });
};
