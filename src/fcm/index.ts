import { MulticastMessage, TokenMessage } from "firebase-admin/lib/messaging/messaging-api";
import { firebaseAdmin } from "../index";

const sendMessage = async (message:TokenMessage) => {
  try {
    // Send a message to the device corresponding to the provided
    // registration token.
    return firebaseAdmin
      .messaging()
      .send(message)
      .then((response) => {
        // Response is a message ID string.
        return response;
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  } catch (e) {
    console.error(`Error sending message : ${e}`);
    throw e;
  }
};

const sendMulticastMessage = async (message:MulticastMessage) => {
  try {
    // Send a message to the device corresponding to the provided
    // registration token array.
    return firebaseAdmin
      .messaging()
      .sendEachForMulticast(message)
      .then((response) => {
        // Response is a message ID string.
        return response;
      })
      .catch((error) => {
        console.log("Error sending message:", error);
        return error;
      });
  } catch (e) {
    console.error(`Error sending message : ${e}`);
    throw e;
  }
};

export default {
  sendMessage,
  sendMulticastMessage,
};
