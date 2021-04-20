import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeCWIKhi4rbxMLLxHvuuWHqsXk2bl8zcCoNqvOcFSMsvYJTYnia4oLAlVbRwT054PEe9gJYZMorLVb4CznMeW9F00Z0xlX516');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;