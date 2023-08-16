import { firebaseAdmin } from "../index";

const sendMessage = async (token: string, data: any) => {
  try {
    // This registration token comes from the client FCM SDKs.
    const registrationToken = token;

    const message = {
      data,
      token: registrationToken,
    };

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

const sendMulticastMessage = async (tokens: string[], data: any) => {
  try {
    // This registration token comes from the client FCM SDKs.
    const registrationToken = tokens;

    const message = {
      data,
      tokens: registrationToken,
    };
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
        return error
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
