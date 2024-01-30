import "./formInput.css"

const FormInput = (props) => {
    return (
        <div className="inputForm">
            <label>{props.label}</label>
            <input name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>

    );
};

export default FormInput;