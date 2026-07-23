import { useEffect } from "react";

import {
  connectSocket,
  disconnectSocket,
} from "@/services/websocket/socketManager";

export function useDashboardSocket(
  callback
) {

  useEffect(() => {

    const client = connectSocket(() => {

      client.subscribe(
        "/topic/dashboard",
        (message) => {

          callback(
            JSON.parse(message.body)
          );

        }
      );

    });

    return () => {

      disconnectSocket();

    };

  }, [callback]);

}