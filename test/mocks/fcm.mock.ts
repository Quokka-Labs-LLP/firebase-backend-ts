const mockSendMessageResponse = jest.fn();
mockSendMessageResponse.mockResolvedValueOnce('validMessageId');
mockSendMessageResponse.mockResolvedValueOnce(undefined);

const sendMulticastMessage = jest.fn();
sendMulticastMessage.mockResolvedValueOnce('validMessageId');
sendMulticastMessage.mockResolvedValueOnce(undefined);


export default {
    mockSendMessageResponse,
    sendMulticastMessage
  };