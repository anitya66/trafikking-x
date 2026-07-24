import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs";

let client = null;

const subscriptions = new Map();

export function connectSocket() {

  if (client?.active || client?.connected) {
    return client;
  }

  client = new Client({

    webSocketFactory: () =>
      new SockJS("http://localhost:8080/ws"),

    reconnectDelay: 5000,

    debug: () => {},

    onConnect: () => {

      console.log("✅ WebSocket Connected");

      subscriptions.forEach((callback, destination) => {

        client.subscribe(destination, callback);

      });

    },

    onStompError(frame) {

      console.error("STOMP Error", frame);

    },

  });

  client.activate();

  return client;
}

export function subscribe(destination, callback) {

  connectSocket();

  subscriptions.set(destination, callback);

  if (client.connected) {

    return client.subscribe(
      destination,
      callback
    );

  }

  return null;
}

export function unsubscribe(destination) {

  subscriptions.delete(destination);

}

export function publish(destination, body) {

  if (!client?.connected) {
    return;
  }

  client.publish({

    destination,

    body: JSON.stringify(body),

  });

}

export function disconnectSocket() {

  // Intentionally left empty.
  // Keep one socket connection alive
  // for the entire application lifecycle.

}