import formConfig from "../../components/forms/formConfig";
import PaymentInfo from "../../components/forms/checkout/PaymentInfo";
import CheckboxSelectionSet from "../../components/forms/formControls/CheckboxSelectionSet";
import BasicAccountInfoForm from "../../components/forms/checkout/BasicAccountInfoForm";
import { FC } from "react";

const Index: FC = () => {
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
