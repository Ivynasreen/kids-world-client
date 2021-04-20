import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("click")

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log(error.message)
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        console.log(paymentMethod.id)
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
    }
  };

  return (
    <div>
        <form onSubmit={(event) => handleSubmit(event)}>
            <CardElement />
            <input type="submit" disabled= {!stripe} value = "Pay" />
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>
        }
    </div>
  );
};

export default SimpleCardForm;