import { combineReducers } from "redux";
import notesReducer from "./noteReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
