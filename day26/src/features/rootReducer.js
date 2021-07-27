import { inputMailReducer } from "./inputs/input_mail/inputMailSlice";
import { inputNameReducer } from "./inputs/input_name/inputNameSlice";

const initialState = {};

const rootReducer = (state = initialState, action) => {
    return {
        name: inputNameReducer(state.name, action),
        mail: inputMailReducer(state.mail, action)
    }
}

export default rootReducer;