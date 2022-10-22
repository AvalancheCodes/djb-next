import React from "react";
import { RadioButtonField } from "../model/InputSet";

const RadioButton: React.FC<RadioButtonField | null> = (props) => {
  return (
    <div className="form-check">
      <input
        id={props.id}
        name={props.name}
        type={props.type.toString()}
        className="form-check-input"
        // checked={false}
        // required={true}
      />
      <label className="form-check-label" htmlFor="credit">
        {props.label}
      </label>
    </div>
  );
};

const RadioButtonsFieldSet = ({ buttons }) => {
  const radioButtons = buttons.map((button, index) => {
    return <RadioButton {...button} key={index} />;
  });
  return <div className="d-block my-3">{radioButtons}</div>;
};

export default RadioButtonsFieldSet;
