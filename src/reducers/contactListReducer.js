export default (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return action.payload.reverse();

    default:
      return state;
  }
};
