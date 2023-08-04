import { firebaseAdmin } from "../index";

// Function to upload a file to Firebase Storage
const uploadFile = async (
  localFilePath: string,
  destinationPath: string,
  bucketName: string
) => {
  try {
    const bucket = firebaseAdmin.storage().bucket(bucketName);
    await bucket.upload(localFilePath, {
      destination: destinationPath,
    });
    return `File uploaded to ${destinationPath}`;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Function to download a file from Firebase Storage
const downloadFile = async (
  sourcePath: string,
  destinationPath: string,
  bucketName: string
) => {
  try {
    const bucket = firebaseAdmin.storage().bucket(bucketName);
    await bucket.file(sourcePath).download({
      destination: destinationPath,
    });
    return `File downloaded to ${destinationPath}`;
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
};

// Function to delete a file from Firebase Storage
const deleteFile = async (filePath: string,bucketName: string) => {
  try {
    const bucket = firebaseAdmin.storage().bucket(bucketName);
    await bucket.file(filePath).delete();
    return `File ${filePath} deleted successfully`;
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

export default {
    uploadFile,
    deleteFile,
    downloadFile
}
