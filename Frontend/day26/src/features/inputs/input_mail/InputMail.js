import { selectMail } from "./inputMailSlice";
import {useSelector, useDispatch} from 'react-redux'
import { MAIL_CHANGED } from "./types";

const InputMail = (props) => {
    const mail = useSelector(selectMail);
    const dispatch = useDispatch();

    return (
        <div className="InputMail">
            <input value={mail} placeholder={`Email`} type="text" onChange={(event) => {
                dispatch({type: MAIL_CHANGED, payload: event.target.value});
            }}/>
        </div>
    )
}

export default InputMail;