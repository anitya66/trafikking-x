import { useEffect } from "react";

import { useUpdateLocation } from "./useUpdateLocation";

export function useLiveLocation() {

  const mutation =
    useUpdateLocation();

  useEffect(() => {

    if (!navigator.geolocation) {

      console.error(
        "Geolocation is not supported."
      );

      return;

    }

    const watchId =
      navigator.geolocation.watchPosition(

        (position) => {

          mutation.mutate({

            latitude:
              position.coords.latitude,

            longitude:
              position.coords.longitude,

          });

        },

        (error) => {

          console.error(
            "GPS Error:",
            error
          );

        },

        {

          enableHighAccuracy: true,

          maximumAge: 5000,

          timeout: 10000,

        }

      );

    return () => {

      navigator.geolocation.clearWatch(
        watchId
      );

    };

  }, []);

}