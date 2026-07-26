import api from "@/config/axios";

export async function updateMyLocation({

  latitude,

  longitude,

}) {

  const response = await api.put(

    "/ambulances/me/location",

    {

      latitude,

      longitude,

    }

  );

  return response.data.data;

}