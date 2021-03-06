export const buildServers = serverURLs => {
  if (!serverURLs) return;
  const urls = serverURLs.map(serverURL => ({ urls: serverURL }));
  return urls;
};

const replaceCharacter = char => {
  return (char ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> char / 4).toString(16);
};

export const generateRoomKey = () => {
  const baseString = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
  return baseString.replace(/[018]/g, replaceCharacter);
};

export const createMessage = (type, payload) => ({ type, payload });
export const createPayload = (roomKey, socketID, message = null) => ({
  roomKey,
  socketID,
  message
});
