import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { ogo } from "./images/logo.png";


export default function Flutterwave(props) {
   const config = {
    public_key: 'FLWPUBK_TEST-c62af0486335c4d84388b31d08e414ee-X',
    tx_ref: Date.now(),
    amount: "100",
    currency: 'usd',
    payment_options: 'card,ussd',
    customer: {
      email: "dixontheworldvsy@gmail.com",
      phonenumber: "0753971151",
      name: "muneza",
    },
    customizations: {
      title: 'Wuzi Africa',
      description: 'Payment for items in cart',
        logo:"https://drive.google.com/file/d/1iYKssNKEQlYVOAvEvlKkTeAOl5lpN-Lk/view?usp=sharing",
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}