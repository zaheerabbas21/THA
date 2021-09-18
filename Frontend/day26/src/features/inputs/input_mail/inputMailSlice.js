import { MAIL_CHANGED } from "./types";

const initialState = "";

export const inputMailReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIL_CHANGED:
      return action.payload;
    default:
      return state;
  }
};


export const selectMail = state => state.mail;

