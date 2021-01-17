import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  GET_USER_ERROR,
  LOGOUT,
  CLEAR_MESSAGE,
} from "../types/authTypes";
import setToken from "../../config/setTokenOnHeaders";
import axiosClient from "../../config/axios";

export function registerUserAction(credentials) {
  return async (dispatch) => {
    dispatch(register());

    try {
      const newUser = await axiosClient.post("/users", credentials);
      dispatch(registerUserSuccess(newUser.data.msg));
    } catch (error) {
      dispatch(registerUserError(error));
    }
  };
}

const register = () => ({
  type: REGISTER,
});

const registerUserSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload: message,
});

const registerUserError = (error) => ({
  type: REGISTER_ERROR,
  payload: {
    error,
    content: "Email or username already in use",
  },
});

export function loginAction(credentials) {
  return async (dispatch) => {
    dispatch(login());

    try {
      const loginUser = await axiosClient.post("/auth", credentials);
      dispatch(loginUserSuccess(loginUser.data.msg));
      localStorage.setItem("token", loginUser.data.token);
      dispatch(getAuthUserAction());
    } catch (error) {
      dispatch(loginUserError(error));
    }
  };
}

const login = () => ({
  type: LOGIN,
});

const loginUserSuccess = (message) => ({
  type: LOGIN_SUCCESS,
  payload: message,
});

const loginUserError = (error) => ({
  type: LOGIN_ERROR,
  payload: { error, content: "Incorrect email or password" },
});

export function getAuthUserAction() {
  const token = localStorage.getItem("token");

  if (token) {
    setToken(token);
  } else {
    localStorage.removeItem("token");
  }

  return async (dispatch) => {
    try {
      const userData = await axiosClient.get("/auth");
      console.log(userData);
      if (!userData.data) {
        dispatch(loginUserError());
      } else {
        dispatch(getUserData(userData.data));
      }
    } catch (error) {
      dispatch(getUserDataError(error));
    }
  };
}

const getUserData = (data) => ({
  type: GET_USER,
  payload: data,
});

const getUserDataError = (error) => ({
  type: GET_USER_ERROR,
  payload: error,
});

export function logoutAction() {
  localStorage.removeItem("token");

  return async (dispatch) => {
    dispatch(logout());
  };
}

const logout = () => ({
  type: LOGOUT,
});

export function clearMessageAction() {
  return async (dispatch) => {
    dispatch(clearMessage());
  };
}

const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
