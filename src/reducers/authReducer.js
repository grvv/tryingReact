const initialState = {
  isUserLoggedIn: false,
  authToken: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isUserLoggedIn: true,
        authToken: action.payload
      };
    case "LOGOUT":
      return state;
    default:
      const token = localStorage.getItem("token") || null;

      return {
        isUserLoggedIn: !!token,
        authToken: token
      };
  }
};
