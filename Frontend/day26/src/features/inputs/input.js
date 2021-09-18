import InputMail from "./input_mail/InputMail"
import InputName from "./input_name/InputName"

const DataInput = (props) => {
    return (
        <div className="DataInput">
            <h3>Input</h3>
            <InputName/>
            <InputMail/>
        </div>
    );
}

export default DataInput;