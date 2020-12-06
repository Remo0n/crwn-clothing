import React from "react";
import StripeCheckout from "react-stripe-checkout";

import CrwnSvg from "../../assets/crown.svg";

const StripeBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HvO4SHwbi8sSaqS0iESgPYJxzzHBxX9D4HM4k3b1A2C9FLWZexEelL9LxwXZQrNUvgBum4JqeRwkvuiHniC7Rra00mfqZV7L2";

  const onToken = token => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $$ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      image={CrwnSvg}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeBtn;
