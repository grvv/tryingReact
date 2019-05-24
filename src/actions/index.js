import baseApi from "../apis/base";
import history from "../history";
import { authHeader } from "./../helpers/authHeader";

export const login = formValue => async dispatch => {
  const response = await baseApi.post("/login", formValue);

  if (response && response.data.success) {
    console.log("response", response);

    dispatch({
      type: "LOGIN",
      payload: response.data.token
    });

    localStorage.setItem("token", response.data.token);
    history.replace("/dashboard");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  history.replace("/");

  return {
    type: "LOGOUT"
  };
};

export const getAllContacts = () => async dispatch => {
  const response = await baseApi.get("/allPersons", {
    headers: { ...authHeader() }
  });

  dispatch({ type: "GET_ALL_CONTACTS", payload: response.data.data });
};

export const fetchContact = id => async dispatch => {
  const response = await baseApi.get("/allPersons", {
    headers: { ...authHeader() }
  });

  const extractedContact = response.data.data.find(
    contact => contact._id === id
  );

  dispatch({
    type: "GET_CONTACT",
    payload: extractedContact
  });
};
