import { useEffect } from "react";

import {
  connectSocket,
  disconnectSocket,
} from "@/services/websocket/socketManager";

export function useNotificationSocket(callback) {

  useEffect(() => {

    const client = connectSocket(() => {

      client.subscribe(
        "/user/queue/notifications",
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