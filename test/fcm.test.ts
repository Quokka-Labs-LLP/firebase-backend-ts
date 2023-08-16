import fcmFunctions from "../src/fcm";
import fcmMock from "../test/mocks/fcm.mock"

// Mock firebaseAdmin
jest.mock("../src/index", () => ({
  firebaseAdmin: {
    messaging: jest.fn(() => ({
      send: fcmMock.mockSendMessageResponse,
      sendEachForMulticast: fcmMock.sendMulticastMessage
    })),
  },
}));

describe("Fcm Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send notification to device", async () => {
    const message = {
      token: "123456789",
      data: {
        subject: "hello",
      },
    };

    const result = await fcmFunctions.sendMessage(message);

    expect(result).toBe(`validMessageId`);
  });

  it("should send give error in sending notification", async () => {
    const message = {
      token: "123456788",
      data: {
        subject: "hello",
      },
    };

    const result = await fcmFunctions.sendMessage(message);

    expect(result).toEqual(undefined);
  });

  it("should send notification to multiple devices", async () => {
    const message = {
      tokens: ["123456789","123456788"],
      data: {
        subject: "hello",
      },
    };

    const result = await fcmFunctions.sendMulticastMessage(message);

    expect(result).toBe('validMessageId');
  });

  it("should give error in sending notification to multiple devices", async () => {
    const message = {
      tokens: ["123456789","123456788"],
      data: {
        subject: "hello",
      },
    };

    const result = await fcmFunctions.sendMulticastMessage(message);

    expect(result).toBe(undefined);
  });
});
