const mockAddResponse = jest.fn();
mockAddResponse.mockResolvedValue({
  id: 1,
  firstName: "Alice",
});

const mockUpdateResponse = jest.fn();
mockUpdateResponse.mockResolvedValue({});

const mockGetRecordById = jest.fn();
mockGetRecordById.mockResolvedValueOnce({
  data: () => {
    return { firstName: "Amir" };
  },
});

mockGetRecordById.mockResolvedValueOnce({
  data: () => {
    return null;
  },
});

const mockGetAllRecords = jest.fn();
mockGetAllRecords.mockResolvedValueOnce({
  docs: [
    {
      id: "id1",
      data: () => {
        return { firstName: "John" };
      },
    },
    {
        id: "id2",
        data: () => {
          return { firstName: "Jane" };
        },
      },
  ],
});

const mockUpdateRecordById = jest.fn();
mockUpdateRecordById.mockResolvedValueOnce(true);

export default {
  mockAddResponse,
  mockGetRecordById,
  mockGetAllRecords,
  mockUpdateRecordById
};
