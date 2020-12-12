import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  GET_USER_ERROR,
} from "../types/authTypes";

const initialState = {
  userInfo: null,
  message: {
    type: null,
    content: null,
  },
  loading: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: { type: "success", content: action.payload },
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        message: { type: "error", content: action.payload.content },
      };
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        message: { type: "error", content: action.payload.content },
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case GET_USER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        userInfo: null,
      };
    default:
      return state;
  }
}
