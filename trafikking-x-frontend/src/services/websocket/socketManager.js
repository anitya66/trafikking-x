import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs";

let client = null;

export function connectSocket(onConnect) {

  if (client?.connected) {
    return client;
  }

  client = new Client({

    webSocketFactory: () =>
      new SockJS(
        "http://localhost:8080/ws"
      ),

    reconnectDelay: 5000,

    debug: () => {},

    onConnect: () => {

      console.log("✅ WebSocket Connected");

      onConnect?.(client);
    },

    onStompError(frame) {

      console.error(
        "STOMP Error",
        frame
      );
    },
  });

  client.activate();

  return client;
}

export function disconnectSocket() {

  client?.deactivate();

  client = null;
}