import { OPEN_MODAL, CLOSE_MODAL } from "../types/modalTypes";

export function openModalAction() {
  return async (dispatch) => {
    dispatch(openModal());
  };
}

const openModal = () => ({
  type: OPEN_MODAL,
  payload: true,
});

export function closeModalAction() {
  return async (dispatch) => {
    dispatch(closeModal());
  };
}

const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: false,
});
