import React, { createContext, useState, useContext } from 'react';
import DetailsCard from '../cards/DetailsCard';
import FavIcon from 'react-native-vector-icons/MaterialIcons';
import parkIDs from '../component/ParkIDs'


const ModalContext = createContext();
const hsSet = new Set();
const epcotSet = new Set();
const mkSet = new Set();
const akSet = new Set();
const dlSet = new Set();
const caSet = new Set();
const unFavIcon = <FavIcon name="favorite-outline" size={20} color='#334155' />;
const favIcon = <FavIcon name="favorite" size={20} color='#334155' />;

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [attraction, setAttraction] = useState(null);
  const [ getFavIcon, setFavIcon ] = useState(false);
  const [ getIndex, setIndex ] = useState(null);


  const switchSet = (attr) => {
    console.log(parkIDs["WDW Resort"].parks[3]["Hollywood Studios"].id)
    switch (attr.parkId) {
        case parkIDs["WDW Resort"].parks[0]["Magic Kingdom"].id: { return mkSet };
        case parkIDs["WDW Resort"].parks[1]["Animal Kingdom"].id: { return akSet };
        case parkIDs["WDW Resort"].parks[2]["Epcot"].id: { return epcotSet };
        case parkIDs["WDW Resort"].parks[3]["Hollywood Studios"].id: { return hsSet };
        case parkIDs["Disneyland Resort"].parks[0]["Disneyland"].id: { return dlSet };
        case parkIDs["Disneyland Resort"].parks[1]["California Adventure"].id: { return caSet };
    }
  }
  const favAttr = async (attr, index) => {
    setIndex(index);

    if (switchSet(attr).has(attr.id) && switchSet(attr).has(index)) {
        switchSet(attr).delete(attr.id)
        switchSet(attr).delete(index)
        setFavIcon(false)
        console.log("delete", switchSet(attr))
        //console.log(favSet)

    }
    else if (!switchSet(attr).has(attr.id) && !switchSet(attr).has(index)) {
        switchSet(attr).add(attr.id)
        switchSet(attr).add(index)
        setFavIcon(true)
        console.log("add", switchSet(attr))
    }

}


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
    <ModalContext.Provider value={{ visible, showModal, hideModal, favAttr, hsSet, epcotSet, mkSet, akSet, dlSet, caSet, getFavIcon, getIndex, attraction }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalContext;
