import { useEffect } from "react";

import {
  subscribe,
  unsubscribe,
} from "@/services/websocket/socketManager";

export function useAmbulanceTracking(callback) {

  useEffect(() => {

    subscribe(
      "/topic/ambulance/location",
      (message) => {

        callback(
          JSON.parse(message.body)
        );

      }
    );

    return () => {

      unsubscribe(
        "/topic/ambulance/location"
      );

    };

  }, [callback]);

}