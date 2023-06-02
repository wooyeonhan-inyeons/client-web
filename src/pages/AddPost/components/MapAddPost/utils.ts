import { LocationProps } from "../../../../interface";
import { Asddress_components, setViewStateType } from "./type";
import Geocode from "react-geocode";
import axios from "axios";

// export async function getCurrentLocation({ setViewState }: setViewStateType) {
//   try {
//     const position = await getCurrentPosition();
//     const { latitude, longitude } = position.coords;
//     const address = await reverseGeocode(latitude, longitude);

//     setViewState({
//       latitude,
//       longitude,
//       zoom: 15,
//       address,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// function getCurrentPosition(): Promise<GeolocationPosition> {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function reverseGeocode(
//   latitude: number,
//   longitude: number
// ): Promise<string> {
//   const clientId = "sdtj3xbqm7";
//   const clientSecret = "YOUR_CLIENT_SECRET";
//   const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${longitude},${latitude}&output=json`;

//   try {
//     const response = await axios.get(apiUrl, {
//       headers: {
//         "X-NCP-APIGW-API-KEY-ID": clientId,
//         "X-NCP-APIGW-API-KEY": clientSecret,
//       },
//     });

//     const results = response.data.results;
//     if (results.length > 0) {
//       return results[0].region.area1.name + " " + results[0].region.area2.name;
//     } else {
//       throw new Error("Reverse geocoding failed");
//     }
//   } catch (error) {
//     throw new Error("Reverse geocoding failed");
//   }
// }
/**
 *
 * @param setViewState setState를 인자로 받아 함수 내에서 업데이트
 */
// export function getCurrentLocation({ setViewState }: setViewStateType) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     setViewState({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//       zoom: 15,
//     });
//   });
// }

/**
 *
 * @param viewport viewport에 쓰이는 좌표 값 오프젝트
 * @returns `address`:string[] 지역 정보가 담긴 배열
 */
export async function getCurrentGeocode(
  viewport: LocationProps
): Promise<string[]> {
  const address: Array<string> = [];
  Geocode.setApiKey(import.meta.env.VITE_GOOGLE_MAP_API);
  Geocode.setLanguage("ko");
  Geocode.setRegion("ko");
  try {
    const response = await Geocode.fromLatLng(
      String(viewport.latitude),
      String(viewport.longitude)
    );
    response.results[1].address_components.map((item: Asddress_components) => {
      item.types.map((type: string) => {
        switch (type) {
          case "sublocality":
            address.push(item.long_name);
            console.log(typeof address);
            break;
          case "administrative_area_level_1":
            address.push(item.long_name);
            break;
          case "administrative_area_level_2":
            address.push(item.long_name);
            break;
        }
      });
    });
    return address;
  } catch (error) {
    console.error(error);
    return [];
  }
}
