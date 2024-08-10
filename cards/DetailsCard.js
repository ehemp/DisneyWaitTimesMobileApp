import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { useModal } from '../context/ModalContext';

const DetailsCard = () => {
  const { visible, hideModal, attraction } = useModal();
  //console.log("DetailsCard ", attraction.name)
  const inlineText = { flexDirection: 'row', }
  const portalStyle = { flex: 1, }
  const modalContainerStyle = { backgroundColor: '#0e1428', justifyContent: 'center', width: '100%', height: '60%', alignItems: 'center', borderWidth: 2, borderRadius: 10, padding: 10, };
  const containerStyle = { backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', padding: 10, };
  const textDetails = { fontSize: 20,  fontFamily: 'Quicksand-Medium', textAlign: 'center', color: '#f6f1ea',}
  const styleGo = { color: '#047857', }
  const styleStop = { color: '#b91c1c', }
  const newLine = "\n";

  const getLocalTime = () => {
    const offSet = new Date().getTimezoneOffset();
        const utcTime = Date.now();
        const localTime = utcTime - offSet;
        const now = new Date(localTime);
        return now;
  }

  const mapForecast = (attraction) => {
    let foreCastArr = [];
    if (attraction.forecast) {
    const timeCast = attraction.forecast.map((foreCast) => foreCast.time)
    const waitCast = attraction.forecast.map((foreCast) => foreCast.waitTime)
    let timeCastString = "";
    for (let i = 0; i < timeCast.length; i++) {
        timeCastString = new Date(timeCast[i]).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    if (new Date(timeCast[i]) >= getLocalTime()) {
        foreCastArr.push({hour: timeCastString, wait: waitCast[i]})
        }
    else if (!attraction.forecast) {return "Unavailable."}
    }
            return foreCastArr.map((i) => `${i.hour}: ${i.wait} minutes.\n`);
         }
    else if (!attraction.forecast) {return "Unavailable."}

  }

  if (!visible) return null; // Return null when the modal is not visible
  return (
    <PaperProvider>

      <Portal style={portalStyle}>
        <Modal  contentContainerStyle={modalContainerStyle} visible={visible} onDismiss={hideModal} >
        <SafeAreaView>
        <ScrollView>
        <View style={containerStyle}>
          <Text style={textDetails}>{attraction?.name}: </Text><Text style={[textDetails, attraction?.status === "OPERATING" ? styleGo : styleStop]}>{attraction?.status === "OPERATING" ? "Open" : attraction.status === "DOWN" ? "Down" : attraction.status === "CLOSED" ? "Closed" : "Refurbishment"}</Text>
          <Text style={textDetails}>Forecast:{newLine}{mapForecast(attraction)}</Text>
        </View>
        </ScrollView>
        </SafeAreaView>
        </Modal>
      </Portal>

    </PaperProvider>

  );
};

export default DetailsCard;
