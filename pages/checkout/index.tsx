import React from "react";
import InputFieldSet from "../../components/forms/formControls/InputFieldSet";
import SelectFieldSet from "../../components/forms/formControls/SelectFieldSet";
import formConfig from "../../components/forms/formConfig";
import RadioButtonsFieldSet from "../../components/forms/formControls/RadioButtonsFieldSet";
import PaymentInfo from "../../components/forms/checkout/PaymentInfo";
import CheckboxSelectionSet from "../../components/forms/formControls/CheckboxSelectionSet";
import BasicAccountInfoForm from "../../components/forms/checkout/BasicAccountInfoForm";

console.log(formConfig);

const Index = () => {
  const {
    firstName,
    lastName,
    paymentMethods,
    username,
    creditCardNumber,
    nameOnCard,
    expiration,
    cvv,
  } = formConfig;
  return (
    <>
      <section>
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">
                Checkout!
              </h1>
              <p className="lead">
                Please fill out the form below to complete your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <form className="needs-validation" noValidate={true}>
            <BasicAccountInfoForm />

            <hr className="mb-4" />
            <CheckboxSelectionSet options={formConfig.checkOptionSet} />

            <hr className="mb-4" />
            <PaymentInfo
              paymentMethods={paymentMethods}
              creditCardNumber={creditCardNumber}
              nameOnCard={nameOnCard}
              cvv={cvv}
              expiration={expiration}
            />
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Index;
