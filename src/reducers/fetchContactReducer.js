export default (state = [], action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return action.payload;
    default:
      return state;
  }
};
