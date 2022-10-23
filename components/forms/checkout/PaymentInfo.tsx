import RadioButtonsFieldSet from "../formControls/RadioButtonsFieldSet";
import InputFieldSet from "../formControls/InputFieldSet";
import { FC } from "react";

interface IProps {
  paymentMethods: any;
  nameOnCard: any;
  creditCardNumber: any;
  expiration: any;
  cvv: any;
}

const PaymentInfo: FC<IProps> = ({
  paymentMethods,
  nameOnCard,
  creditCardNumber,
  expiration,
  cvv,
}) => {
  // todo: why is this not showing up in the form?
  nameOnCard.underFieldText = "Full name as displayed on card";
  return (
    <>
      <h4 className="mb-3">Payment</h4>
      <RadioButtonsFieldSet buttons={paymentMethods} />
      <div className="row">
        <InputFieldSet {...nameOnCard} />
        <InputFieldSet {...creditCardNumber} />
      </div>
      <div className="row">
        <InputFieldSet {...creditCardNumber} />
        <InputFieldSet {...expiration} />
        <InputFieldSet {...cvv} />
      </div>
    </>
  );
};

export default PaymentInfo;
