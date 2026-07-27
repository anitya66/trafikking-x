import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs";

let client = null;

const subscriptions = new Map();

/*
Map Structure

destination
      ↓
Set<callback>

Example

"/topic/tracking/live"

↓

Set(
   callback1,
   callback2,
   callback3
)
*/

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

  if (!subscriptions.has(destination)) {

    subscriptions.set(
      destination,
      new Set()
    );

  }

  subscriptions
    .get(destination)
    .add(callback);

  if (client.connected) {

    return client.subscribe(

      destination,

      (message) => {

        subscriptions
          .get(destination)
          ?.forEach((listener) => {

            listener(message);

          });

      }

    );

  }

  return null;

}

export function unsubscribe(
  destination,
  callback
) {

  const listeners =
    subscriptions.get(destination);

  if (!listeners) {
    return;
  }

  listeners.delete(callback);

  if (listeners.size === 0) {

    subscriptions.delete(destination);

  }

}

export function disconnectSocket() {

  // Intentionally left empty.
  // Keep one socket connection alive
  // for the entire application lifecycle.

}