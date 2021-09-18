import { selectName } from "../inputs/input_name/inputNameSlice";
import {useSelector} from 'react-redux';
import { selectMail } from "../inputs/input_mail/inputMailSlice";

const DataOutput = (props) => {
    const name = useSelector(selectName);
    const mail =  useSelector(selectMail);

    
    return (
        <div className="DataOutput">
            <h3>Output</h3>
            <p>
                Name: {name}
            </p>
            <p>
                Email: {mail}
            </p>
        </div>
    )
}

export default DataOutput;