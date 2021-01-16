import { OPEN_MODAL, CLOSE_MODAL } from "../types/modalTypes";

const initialState = {
  open: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        open: action.payload,
      };

    default:
      return state;
  }
}
