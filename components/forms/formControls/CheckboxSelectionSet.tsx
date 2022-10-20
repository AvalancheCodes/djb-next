import React from "react";
import { CheckboxField } from "../model/InputSet";

const CheckboxFieldComponent = (props) => {
  return (
    <div className="form-check">
      <input type="checkbox" className={props.className} id={props.id} />
      <label className="form-check-label" htmlFor="save-info">
        {props.label}
      </label>
    </div>
  );
};

const CheckboxSelectionSet = ({ options }) => {
  const checkboxes = options.map((option) => {
    return <CheckboxFieldComponent {...option} />;
  });
  return <div>{checkboxes}</div>;
};

export default CheckboxSelectionSet;
