import * as admin from "firebase-admin";

import path from "path";

export { default as Firestore } from "./firestore/";
export { default as Auth } from "./auth";
export { default as Storage } from "./storage";
export {default as FCM} from "./fcm"

//initialize firebase sdk with config json, in my case its firebase.json created in root folder of project

export let firebaseAdmin: admin.app.App;

export const intializeApp = async (configFileName: string) => {
  try {
      if(!admin.apps.length)
      firebaseAdmin = admin.initializeApp({
        credential: admin.credential.cert(
          path.resolve(__dirname, `../../../../${configFileName}`)
        )
      });
    return firebaseAdmin;
  } catch (e) {
    console.log("Initialize app exception", e);
    return firebaseAdmin;
  }
};
