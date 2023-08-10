import storageFunctions from "../src/storage";

// Mock firebaseAdmin
jest.mock("../src/index", () => ({
  firebaseAdmin: {
    storage: jest.fn(() => ({
      bucket: jest.fn((bucketName) => ({
        upload: jest.fn(),
        file: jest.fn((filePath) => ({
          download: jest.fn(),
          delete: jest.fn(),
        })),
      })),
    })),
  },
}));

describe("Storage Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should upload a file to Firebase Storage", async () => {
    const localFilePath = "local/file/path";
    const destinationPath = "storage/destination/path";
    const bucketName = "storage-bucket-name";

    const mockUpload = jest.fn();
    mockUpload.mockResolvedValue(`File uploaded to ${destinationPath}`)

    const result = await storageFunctions.uploadFile(localFilePath, destinationPath, bucketName);
  
    expect(result).toBe(`File uploaded to ${destinationPath}`);
  });

  it("should download a file from Firebase Storage", async () => {
    const sourcePath = "storage/source/path";
    const destinationPath = "local/destination/path";
    const bucketName = "storage-bucket-name";

    const mockDownload = jest.fn();
    mockDownload.mockResolvedValue(`File downloaded to ${destinationPath}`)
    const result = await storageFunctions.downloadFile(sourcePath, destinationPath, bucketName);
    expect(result).toBe(`File downloaded to ${destinationPath}`);
  });

  it("should delete a file from Firebase Storage", async () => {
    const filePath = "storage/file/path";
    const bucketName = "storage-bucket-name";

    const mockDelete = jest.fn();
   
    mockDelete.mockResolvedValue(`File ${filePath} deleted successfully`)
    const result = await storageFunctions.deleteFile(filePath, bucketName);
    expect(result).toBe(`File ${filePath} deleted successfully`);
  });
});
