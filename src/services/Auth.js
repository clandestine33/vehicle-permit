import SecureLS from "secure-ls";

var ls = new SecureLS();

export const isAuthenticated = () => ls.get("token");

export const getAuthorizationHeader = () => `Bearer ${isAuthenticated()}`;

export const removeAuthenticatedState = () => {
  ls.remove("token");
  ls.remove("refresh");
};

export const authenticateUser = (token, refreshToken) => {
  ls.set("token", token);
  ls.set("refresh", refreshToken);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  isAuthenticated,
  removeAuthenticatedState,
  authenticateUser,
};
