import { setViewStateType } from "../type";

export function getCurrentLocation({ setViewState }: setViewStateType) {
  navigator.geolocation.getCurrentPosition((position) => {
    setViewState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      zoom: 15,
    });
  });

  fetch("https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc").then(
    (response) => console.log("res: ", response)
  );
}
