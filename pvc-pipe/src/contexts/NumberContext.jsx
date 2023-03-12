import React, { useState, useContext } from 'react';

// Create a new context object
const PhoneNumberContext = React.createContext();

// Create a custom hook to use the context
export function usePhoneNumber() {
  return useContext(PhoneNumberContext);
}

// Create a provider component to wrap around the app
export function PhoneNumberProvider({ children }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const updatePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, updatePhoneNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
}
