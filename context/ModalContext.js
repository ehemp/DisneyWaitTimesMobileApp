import React, { createContext, useState, useContext } from 'react';
import DetailsCard from '../cards/DetailsCard';
import FavIcon from 'react-native-vector-icons/MaterialIcons';
import  parkIDs, { parkNames, resortNames, parkIndex } from '../component/ParkIDs'
import { setItem, getItem, removeItem, getAllItems, clear } from '../utils/AsyncStorage';


const ModalContext = createContext();
const hsSet = new Set();
const epcotSet = new Set();
const mkSet = new Set();
const akSet = new Set();
const dlSet = new Set();
const caSet = new Set();
const unFavIcon = <FavIcon name="favorite-outline" size={20} color='#334155' />;
const favIcon = <FavIcon name="favorite" size={20} color='#334155' />;
export const drawerItem = {show: false};
export const drawerItemReg = {show: false};


export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [signOutVisible, setSignOutVisible] = useState(false);
  const [attraction, setAttraction] = useState(null);
  const [ getFavIcon, setFavIcon ] = useState(false);
  const [ getIndex, setIndex ] = useState(null);


  const switchSet = (attr) => {
    switch (attr.parkId) {
        case parkIDs[resortNames.WDWR].parks[parkIndex(parkNames.mk)][parkNames.mk].id: return mkSet; break;
        case parkIDs[resortNames.WDWR].parks[parkIndex(parkNames.ak)][parkNames.ak].id: return akSet; break;
        case parkIDs[resortNames.WDWR].parks[parkIndex(parkNames.ep)][parkNames.ep].id: return epcotSet; break;
        case parkIDs[resortNames.WDWR].parks[parkIndex(parkNames.hs)][parkNames.hs].id: return hsSet; break;
        case parkIDs[resortNames.DLR].parks[parkIndex(parkNames.dl)][parkNames.dl].id: return dlSet; break;
        case parkIDs[resortNames.DLR].parks[parkIndex(parkNames.ca)][parkNames.ca].id: return caSet; break;
        default: console.log("Could not match id.");
    }
  }
  const favAttr = async (attr, index) => {
    //setIndex(index);
    /*if (switchSet(attr).has(attr.id) && switchSet(attr).has(index)) {
        switchSet(attr).delete(attr.id)
        switchSet(attr).delete(index)
        setFavIcon(false)
        console.log("delete", switchSet(attr))
    }*/
    //await clear();
    //console.log(await !getItem(index))
    //const uniqueIndex = "_" + index;
    if (await getItem(index) === null) {
        await setItem(index, attr.id);
        //await setItem(index, true);
        //console.log("set", await getItem(index));
        console.log("set", await getAllItems());
        //setFavIcon(true);
        return;
    }
    else if (await getItem(index) === attr.id) {
        //console.log("remove", await getItem(index));
        await removeItem(index);
        //await setItem(index, false);
        console.log("remove", await getAllItems());
        //setFavIcon(false);
        return;
    }
    /*else if (!switchSet(attr).has(attr.id) && !switchSet(attr).has(index)) {
        switchSet(attr).add(attr.id)
        switchSet(attr).add(index)
        setFavIcon(true)
        console.log("add", switchSet(attr))
    }*/
}

  const showModal = (attr) => {
    setAttraction(attr);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setAttraction(null);
  };

  const showSignOut = () => {
    drawerItem.show = false;

  };
  const hideSignOut = () => {
    drawerItem.show = true;
  };
  const showSignInReg = () => {
      drawerItemReg.show = true;
      drawerItem.show = true;
    };
    const hideSignInReg = () => {
      drawerItemReg.show = false;
    };

  return (
    <ModalContext.Provider value={{ showSignInReg, hideSignInReg, showSignOut, hideSignOut, visible, showModal, hideModal, favAttr, hsSet, epcotSet, mkSet, akSet, dlSet, caSet, getFavIcon, getIndex, attraction }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalContext;
