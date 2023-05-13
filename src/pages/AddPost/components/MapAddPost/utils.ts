import { LocationProps } from "../../../../interface";
import { Asddress_components, setViewportType } from "./type";
import Geocode from "react-geocode";

/**
 *
 * @param setViewport setState를 인자로 받아 함수 내에서 업데이트
 */
export function getCurrentLocation({ setViewport }: setViewportType) {
  navigator.geolocation.getCurrentPosition((position) => {
    setViewport({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      zoom: 15,
    });
  });
}

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
