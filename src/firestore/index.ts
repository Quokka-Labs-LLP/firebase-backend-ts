import { firebaseAdmin } from "../index";

const getRecordById = async (collectionName: string, id: string) => {
  try {
    if (!firebaseAdmin) throw new Error("Please initialize firebaseAdmin");
    const docRef = await firebaseAdmin
      .firestore()
      .collection(collectionName)
      .doc(id);
    const docSnapShot = await docRef.get();
    return docSnapShot.data();
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getAllRecords = async (collectionName: string) => {
  try {
    if (!firebaseAdmin) throw new Error("Please initialize firebaseAdmin");
    const snapshot = await firebaseAdmin
      .firestore()
      .collection(collectionName)
      .get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error(e);
    return [];
  }
};

const addRecord = async (collectionName: string, data: any) => {
  try {
    if (!firebaseAdmin) throw new Error("Please initialize firebaseAdmin");
    const docRef = await firebaseAdmin
      .firestore()
      .collection(collectionName)
      .add(data);
    return docRef.id;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const updateRecord = async (collectionName: string, id: string, data: any) => {
  try {
    if (!firebaseAdmin) throw new Error("Please initialize firebaseAdmin");
    const docRef = await firebaseAdmin
      .firestore()
      .collection(collectionName)
      .doc(id);
    await docRef.update(data);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const deleteRecord = async (collectionName: string, id: string) => {
  try {
    if (!firebaseAdmin) throw new Error("Please initialize firebaseAdmin");
    await firebaseAdmin.firestore().collection(collectionName).doc(id).delete();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default {
  getRecordById,
  getAllRecords,
  addRecord,
  updateRecord,
  deleteRecord,
};
