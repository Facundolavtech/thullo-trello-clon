import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
} from "../types/authTypes";

const initialState = {
  userInfo: null,
  message: null,
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
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        userInfo: action.payload
      };
    default:
      return state;
  }
}
