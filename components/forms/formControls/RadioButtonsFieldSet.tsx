import { FC } from "react";
import { RadioButtonField } from "../model/InputSet";

const RadioButton: FC<RadioButtonField> = (props) => {
  return (
    <div className="form-check">
      <input
        id={props.id}
        name={props.name}
        type={props.type.toString()}
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor="credit">
        {props.label}
      </label>
    </div>
  );
};

const RadioButtonsFieldSet: FC<{ buttons: RadioButtonField[] }> = ({
  buttons,
}) => {
  const radioButtons = buttons.map((button, index) => {
    return <RadioButton {...button} key={index} />;
  });
  return <div className="d-block my-3">{radioButtons}</div>;
};

export default RadioButtonsFieldSet;
