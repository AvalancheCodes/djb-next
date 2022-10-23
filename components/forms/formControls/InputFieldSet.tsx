import { FC } from "react";
import { InputSet } from "../model/InputSet";

const InputFieldSet: FC<InputSet> = (props) => {
  return (
    <div className={props.fieldContainerClassName}>
      <label htmlFor="firstName">{props.label}</label>
      <div className="input-group">
        {props.prepend && (
          <div className="input-group-prepend">
            <span className="input-group-text">{props.prepend}</span>
          </div>
        )}
        <input
          type={props.type.toString()}
          className={props.className}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          required={props.required}
        />
        <div className="invalid-feedback">{props.validationErr}</div>
      </div>
    </div>
  );
};

export default InputFieldSet;
