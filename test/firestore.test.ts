import firestoreQueries from "../src/firestore";
import firestoreMock from "./mocks/firestore.mock"

// Mock firebaseAdmin
jest.mock("../src/index", () => ({
  firebaseAdmin: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          get: firestoreMock.mockGetRecordById,
          update: firestoreMock.mockUpdateRecordById,
          delete: jest.fn(),
        })),
        add: firestoreMock.mockAddResponse,
        get: firestoreMock.mockGetAllRecords,
      })),
    })),
  },
}));

describe("Firestore Queries", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get a record by id", async () => {
    const collectionName = "users";
    const id = "44khQ3yj2N98RSy00IQy";

    const mockData = { firstName: "Amir" };

    const result = await firestoreQueries.getRecordById(collectionName, id);
    expect(result).toEqual(mockData);
  });

  it("should return null when getting a non-existent record by id", async () => {
    const collectionName = "users";
    const id = "non_existent_id";

    const result = await firestoreQueries.getRecordById(collectionName, id);
    expect(result).toBeNull();
  });

  it("should get all records", async () => {
    const collectionName = "users";

    const mockData = [
      { id: "id1", firstName: "John" },
      { id: "id2", firstName: "Jane" }
    ];
    const result = await firestoreQueries.getAllRecords(collectionName);
    expect(result).toEqual(mockData);
  });

  it("should add a new record", async () => {
    const collectionName = "users";
    const newData = { firstName: "Alice" };
    const result = await firestoreQueries.addRecord(collectionName, newData);
    expect(result).toBe(1);
  });

  it("should update a record", async () => {
    const collectionName = "users";
    const id = "record_id";
    const updatedData = { firstName: "Wonder" };

    const result = await firestoreQueries.updateRecord(
      collectionName,
      id,
      updatedData
    );
    expect(firestoreMock.mockUpdateRecordById).toHaveBeenCalledWith(updatedData);
    expect(result).toBe(true);
  });

  it("should delete a record", async () => {
    const collectionName = "users";
    const id = "record_id";
    const result = await firestoreQueries.deleteRecord(collectionName, id);
    expect(result).toBe(true);
  });
});
