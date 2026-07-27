import { useEffect } from "react";

import {
  subscribe,
  unsubscribe,
} from "@/services/websocket/socketManager";

export function useAmbulanceTracking(callback) {

  useEffect(() => {

  const handleMessage = (message) => {

    callback(
      JSON.parse(message.body)
    );

  };

  subscribe(
    "/topic/tracking/live",
    handleMessage
  );

  return () => {

    unsubscribe(
      "/topic/tracking/live",
      handleMessage
    );

  };

}, [callback]);

}