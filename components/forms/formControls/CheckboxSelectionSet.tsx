import { FC } from "react";

interface ICheckboxFieldComponentProps {
  id: string;
  label?: string;
  className?: string;
}

const CheckboxFieldComponent: FC<ICheckboxFieldComponentProps> = (props) => {
  return (
    <div className="form-check">
      <input type="checkbox" className={props.className} id={props.id} />
      <label className="form-check-label" htmlFor="save-info">
        {props.label}
      </label>
    </div>
  );
};

interface ICheckboxSelectionSet {
  options: ICheckboxFieldComponentProps[];
}

const CheckboxSelectionSet: FC<ICheckboxSelectionSet> = ({ options }) => {
  const checkboxes = options.map((option, index) => {
    return <CheckboxFieldComponent {...option} key={index} />;
  });
  return <div>{checkboxes}</div>;
};

export default CheckboxSelectionSet;
