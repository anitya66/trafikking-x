import axios from "axios";

export async function reverseGeocode(latitude, longitude) {
  const { data } = await axios.get(
    "https://nominatim.openstreetmap.org/reverse",
    {
      params: {
        format: "jsonv2",
        lat: latitude,
        lon: longitude,
      },
      headers: {
        Accept: "application/json",
      },
    }
  );

  return data.display_name;
}