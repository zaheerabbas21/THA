import {useDispatch, useSelector} from 'react-redux';
import { selectName } from './inputNameSlice';
import { NAME_CHANGED } from './types';

const InputName = (props) => {
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    return (
        <div className="InputName">
            <input type="text"  placeholder={`Name`} value={name} onChange={(event) => {
                dispatch({type: NAME_CHANGED, payload: event.target.value});
            }} />
        </div>
    );
}

export default InputName;