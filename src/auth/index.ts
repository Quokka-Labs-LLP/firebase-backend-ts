import { firebaseAdmin } from "../index";

const verifyToken = async (token: string) => {
  try {
    return await firebaseAdmin.auth().verifyIdToken(token);
  } catch (e) {
    console.error(`Error in getting info from token: ${token}`);
    return false
  }
};

const generateToken = async (uid: string) => {
  try {
    return await firebaseAdmin.auth().createCustomToken(uid);
  } catch (e) {
    console.error(`Error in generating token for: ${uid}`);
    return null
  }
};

export default {
  verifyToken,
  generateToken,
};
