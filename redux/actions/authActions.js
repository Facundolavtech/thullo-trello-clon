import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
} from "../types/authTypes";

import setToken from "../../config/setTokenOnHeaders";

import axiosClient from "../../config/axios";

export function registerUserAction(credentials) {
  return async (dispatch) => {
    dispatch(register());

    try {
      const newUser = await axiosClient.post("/users", credentials);
      dispatch(registerUserSuccess(newUser));
    } catch (error) {
      dispatch(registerUserError(error.msg));
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
  payload: error,
});

export function loginAction(email, password) {
  return async (dispatch) => {
    dispatch(login());

    try {
      const loginUser = await axiosClient.post("/auth", email, password);
      dispatch(loginUserSuccess(loginUser));

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

const loginUserSuccess = (loginUser) => ({
  type: LOGIN_SUCCESS,
  payload: {
    message: loginUser.data.msg,
  },
});

const loginUserError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
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
      dispatch(loginUserError());
    }
  }
};

const getUserData = (data) => ({
  type: GET_USER,
  payload: data,
});
