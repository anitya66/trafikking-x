import { useEffect, useState } from "react";

import {
  connectSocket,
  subscribe,
} from "@/realtime/socketManager";

export function useLiveAmbulances() {

  const [locations, setLocations] =
    useState({});

  useEffect(() => {

    connectSocket();

    subscribe(

      "/topic/ambulances",

      (message) => {

        const event =
          JSON.parse(message.body);

        setLocations((prev) => ({

          ...prev,

          [event.ambulanceId]: event,

        }));

      }

    );

  }, []);

  return locations;

}