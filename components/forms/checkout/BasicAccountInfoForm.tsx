import React from "react";
import formConfig from "../formConfig";
import InputFieldSet from "../formControls/InputFieldSet";
import SelectFieldSet from "../formControls/SelectFieldSet";

const BasicAccountInfoForm = () => {
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
