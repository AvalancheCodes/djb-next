import React from "react";
import { SelectSet } from "../model/InputSet";

const SelectFieldSet: React.FC<SelectSet | null> = ({ ...props }) => {
  return (
    <div className="col-md-4 mb-3">
      <label htmlFor="state" className="form-label">
        {props.label}
      </label>
      <select
        className="form-select d-block w-100"
        id={props.id}
        required={props.required}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option.value} selected={option.selected}>
            {option.label}
          </option>
        ))}
      </select>
      {props.underFieldText && (
        <small className="form-text text-muted">{props.underFieldText}</small>
      )}
      <div className="invalid-feedback">{props.validationErr}</div>
    </div>
  );
};

export default SelectFieldSet;
