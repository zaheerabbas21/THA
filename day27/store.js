import rootReducer from "./reducers/index";

import { createStore, applyMiddleware } from "redux";

// redux logger for logging actions
// import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
