import { MulticastMessage, TokenMessage } from "firebase-admin/lib/messaging/messaging-api";
import { firebaseAdmin } from "../index";

const sendMessage = async (message:TokenMessage) => {
  try {
    // Send a message to the device corresponding to the provided
    // registration token.
    const sendMessageResp = await firebaseAdmin
      .messaging()
      .send(message)
      return sendMessageResp
  } catch (e) {
    console.error(`Error sending message : ${e}`);
    throw e;
  }
};

const sendMulticastMessage = async (message:MulticastMessage) => {
  try {
    // Send a message to the device corresponding to the provided
    // registration token array.
    const sendMulticastResp = await firebaseAdmin
      .messaging()
      .sendEachForMulticast(message)
      return sendMulticastResp
  } catch (e) {
    console.error(`Error sending message : ${e}`);
    throw e;
  }
};

export default {
  sendMessage,
  sendMulticastMessage,
};
