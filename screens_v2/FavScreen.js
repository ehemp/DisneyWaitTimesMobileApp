

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Modal, Portal, PaperProvider, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import FavIcon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import base64 from 'base-64';
import { useModal } from '../context/ModalContext';
import { parkNames } from '../component/ParkIDs';
import Collapsible from 'react-native-collapsible';
import useWaitTimes from '../hooks/WaitTimesHook_v2';
import styles from '../styles/ParkScreenStyles_v2';
import DetailsCard from '../cards/DetailsCard';




const FavScreen = ({ navigation, route }) => {
    //const parkID = 8; // or use your logic to determine the park ID
    //const route = useRoute();
    const screenName = route.params.park;
    const resort = route.params.destination
    const { isLoading, attractions, initialCollapsedState } = useWaitTimes(screenName, resort);
    const [collapsedIndices, setCollapsedIndices] = useState({})
    const { showModal, hideModal, favAttr, hsSet, epcotSet, mkSet, akSet, dlSet, caSet, getIndex } = useModal();
    const infoIcon = <Icon name="information-circle-outline" size={20} color='#334155' />;
    const favIcon = <FavIcon name="favorite" size={20} color='#334155' />;
    const unFavIcon = <FavIcon name="favorite-outline" size={20} color='#334155' />;
    const [ getFavIcon, setFavIcon ] = useState(false);


    const changeIcon = (index) => {
        //console.log("index", index, "iterateSet", hsSet, epcotSet)
            switch (screenName) {
                case parkNames.hs: {return hsSet.has(index) ? favIcon : unFavIcon};
                case parkNames.ep: {return epcotSet.has(index) ? favIcon : unFavIcon};
                case parkNames.mk: {return mkSet.has(index) ? favIcon : unFavIcon};
                case parkNames.ak: {return akSet.has(index) ? favIcon : unFavIcon};
                case parkNames.dl: {return dlSet.has(index) ? favIcon : unFavIcon};
                case parkNames.ca: {return caSet.has(index) ? favIcon : unFavIcon};
                default: return unFavIcon;
            }
        }


    React.useEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
              // do something
              hideModal();


            });

            return unsubscribe;
          }, [navigation]);



    if (isLoading) {
              return (
                <View style={[styles.container, styles.centered]}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              );
            }


        const expandAllButton = () => {
                                  if (Object.keys(collapsedIndices).length === 0) {
                                     Object.assign(collapsedIndices, initialCollapsedState); }
                                   if (Object.values(collapsedIndices).every(collapsed) === true) {

                                        for (let i = 0; i < Object.keys(collapsedIndices).length; i++) {
                                            toggleExpand2(i)
                                        }
                                   }

                                   else if (Object.values(collapsedIndices).every(collapsed) === false || Object.values(collapsedIndices).some(collapsed) === false) {

                                        for (let i = 0; i < Object.keys(collapsedIndices).length; i++) {
                                             toggleCollapse2(i)
                                             }
                                    }
                                  }


          const toggleCollapse = (index) => {
              if (Object.keys(collapsedIndices).length === 0) {
                Object.assign(collapsedIndices, initialCollapsedState);
              }
              setCollapsedIndices((prevState) => ({
                ...prevState,
                [index]: !prevState[index],
              }));

            };
          const toggleExpand2 = (index) => {
                  setCollapsedIndices((prevState) => ({
                    ...prevState,
                    [index]: false,
                  }));

                };
          const toggleCollapse2 = (index) => {
                setCollapsedIndices((prevState) => ({
                  ...prevState,
                  [index]: true,
                }));

              };

            const collapsed = ((bool) => {
                return bool
            })

            const ExpandAllButton = ({ title, onPress, imageSource }) => {
                return (
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                              <Image style={styles.buttonImageAccordion} source={imageSource} />
                              <Text style={styles.buttonText}>{title}</Text>
                            </TouchableOpacity>

                )
            }

            const CustomButton = ({ title, onPress, imageSource }) => {
              return (
                <TouchableOpacity onPress={onPress}>
                  <Image style={styles.buttonImage} source={imageSource} />
                  <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
              );
            };

        const switchWaitOrGroup = (queue) => {
        const getKey = () => {for (let i in Object.keys(queue)) {return Object.keys(queue)[i]}}
            switch (getKey()) {
                case "STANDBY": {return queue.STANDBY.waitTime ? `${queue.STANDBY.waitTime} minutes.` : "- minutes."}
                case "BOARDING_GROUP": {return queue.BOARDING_GROUP ? `Boarding Groups: ${queue.BOARDING_GROUP.currentGroupStart} - ${queue.BOARDING_GROUP.currentGroupEnd}` : "N/A"}
                default: {return "- minutes."}

            }


        }


            return (
            <SafeAreaView style={styles.container}>
                          <View style={styles.headerContainer}>
                            <Text style={styles.header}>{screenName}</Text>
                                <TouchableOpacity>
                                  <ExpandAllButton
                                    title=""
                                    onPress={expandAllButton}
                                    imageSource={Object.values(collapsedIndices).every(collapsed) ? require('../src/icons/expand1.png') : require('../src/icons/collapse1.png')} />
                                </TouchableOpacity>
                          </View>
                          <PaperProvider>
                          <Portal>
                                            <DetailsCard visible={false} />
                                        </Portal>
                          <ScrollView contentContainerStyle={styles.scrollView}>

                              <View style={styles.rideContainer}>

                                {attractions.sort((a, b) => a.name.localeCompare(b.name)).map((attraction, index) => (
                                    <View key={index} >
                                    <View style={styles.rideLabelsContainer}>
                                       <TouchableOpacity onPress={() => toggleCollapse(index)}>
                                          <Divider bold="true" theme={{ colors: { primary: 'black' } }}/><Text style={styles.attrHeader}>{attraction.name}</Text></TouchableOpacity>
                                          <TouchableOpacity onPress={() => favAttr(attraction, index)}><Text>{changeIcon(index)}</Text></TouchableOpacity>

                                        <Collapsible collapsed={collapsedIndices[index]}>
                                        <Divider bold="true"/>
                                        <View style={styles.rideBackgroundContainer}>
                                         <View style={styles.inlineContainer}>

                                         <Text style={[styles.rideLabel, attraction.status === "OPERATING" ? styles.rideOpen : styles.rideClosed]}>{attraction.status === "OPERATING" ? "Open" : attraction.status === "DOWN" ? "Down" : attraction.status === "CLOSED" ? "Closed" : "Refurbishment"}   </Text>
                                         <Text style={styles.rideLabel}>{switchWaitOrGroup(attraction.queue)}</Text>
                                         </View>
                                          <TouchableOpacity onPress={() => showModal(attraction)}><Text style={styles.rideLabel}>{infoIcon}Forecast</Text></TouchableOpacity>

                                           </View>

                                          </Collapsible>
                                            </View>
                                             </View>
                                          ))}
                              </View>
                            <Divider bold="true"/>
                          </ScrollView>
                          </PaperProvider>
                          <CustomButton
                                          title=""
                                          onPress={() => navigation.navigate('Home')}
                                          imageSource={require('../src/icons/homeIcon1.png')}
                                        />
                        </SafeAreaView>
            );
          };


export default FavScreen;
