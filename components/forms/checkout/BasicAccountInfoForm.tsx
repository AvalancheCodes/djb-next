import formConfig from "../formConfig";
import InputFieldSet from "../formControls/InputFieldSet";
import SelectFieldSet from "../formControls/SelectFieldSet";
import { FC } from "react";

const BasicAccountInfoForm: FC = () => {
  return (
    <>
      <div className="row">
        <InputFieldSet {...formConfig.firstName} />
        <InputFieldSet {...formConfig.lastName} />
      </div>
      <InputFieldSet {...formConfig.username} />
      <InputFieldSet {...formConfig.email} />
      <InputFieldSet {...formConfig.address} />
      <InputFieldSet {...formConfig.address2} />
      <div className="row">
        <SelectFieldSet {...formConfig.country} />
        <SelectFieldSet {...formConfig.state} />
        <InputFieldSet {...formConfig.zip} />
      </div>
    </>
  );
};

export default BasicAccountInfoForm;
