import React, { useState, useContext } from 'react';

// Create a new context object
const PaymentContext = React.createContext();

// Create a custom hook to use the context
export function usePaymentMethod() {
  return useContext(PaymentContext);
}

// Create a provider component to wrap around the app
export function PaymentMethodProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const updatePaymentMethod = (value) => {
    setPaymentMethod(value);
  };

  return (
    <PaymentContext.Provider value={{ paymentMethod, updatePaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
}
