import { useEffect } from "react";

import {
  subscribe,
  unsubscribe,
} from "@/services/websocket/socketManager";

export function useAmbulanceTracking(callback) {

  useEffect(() => {

    subscribe(

      "/topic/ambulances",

      (message) => {

        callback(
          JSON.parse(message.body)
        );

      }

    );

    return () => {

      unsubscribe(
        "/topic/ambulances"
      );

    };

  }, [callback]);

}