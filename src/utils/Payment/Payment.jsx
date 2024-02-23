import { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

const PaystackComponent = ({ amount }) => {
  const [email, setEmail] = useState('');

  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: amount * 100, // amount in kobo
    publicKey: 'YOUR_PUBLIC_KEY',
  };

  const onSuccess = (reference) => {
    console.log(reference);
    // Payment success logic here
  };

  const onClose = () => {
    console.log('Payment closed');
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => initializePayment(onSuccess, onClose)}>Pay Now</button>
    </div>
  );
};

export default PaystackComponent;
