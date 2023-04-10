import {createContext, useState} from 'react';

export const GradientContext = createContext({});

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  return (
    <GradientContext.Provider value={{}}>{children}</GradientContext.Provider>
  );
};
