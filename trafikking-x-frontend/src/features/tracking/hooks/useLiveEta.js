import { useEffect } from "react";

import {
  subscribe,
  unsubscribe,
} from "@/services/websocket/socketManager";

export function useLiveEta(callback) {

  useEffect(() => {

    const handleMessage = (message) => {

      callback(
        JSON.parse(message.body)
      );

    };

    subscribe(
      "/topic/tracking/eta",
      handleMessage
    );

    return () => {

      unsubscribe(
        "/topic/tracking/eta",
        handleMessage
      );

    };

  }, [callback]);

}