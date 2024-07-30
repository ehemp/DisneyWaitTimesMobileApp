import React, { createContext, useState, useContext } from 'react';
import DetailsCard from '../cards/DetailsCard';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [attraction, setAttraction] = useState(null);

  const showModal = (attr) => {
    setAttraction(attr);
    //console.log(attr.name)
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setAttraction(null);
  };

  return (
    <ModalContext.Provider value={{ visible, showModal, hideModal, attraction }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalContext;
