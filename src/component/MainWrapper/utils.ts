import { LocationProps } from "../../interface";
import { Address_components, setInitPositionType } from "./interface";
import Geocode from "react-geocode";

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
    response.results[1].address_components.map((item: Address_components) => {
      item.types.map((type: string) => {
        switch (type) {
          case "sublocality":
            address.push(item.long_name);
            // console.log(typeof address);
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
