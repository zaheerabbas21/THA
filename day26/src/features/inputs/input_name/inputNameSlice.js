import { NAME_CHANGED } from "./types";

const initialState = "";

export const inputNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const selectName = state => state.name;