// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import base64 from 'base-64';
import Collapsible from 'react-native-collapsible';
import useWaitTimes from '../hooks/WaitTimesHook';
import styles from '../styles/ParkScreenStyles';



const CaliAdventureScreen = ({ navigation, route }) => {
    const screenName = route.params.park;
    const resort = route.params.destination;
    const { isLoading, lands, initialCollapsedState } = useWaitTimes(screenName, resort);
    const [collapsedIndices, setCollapsedIndices] = useState({})

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
                                    //console.log("ELSE-IF", i)
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
              <ScrollView contentContainerStyle={styles.scrollView}>
                  <View style={styles.rideContainer}>
                    {lands.map((land, index) => (
                        <View key={index} style={styles.rideContainer}>
                           <TouchableOpacity onPress={() => toggleCollapse(index)}>
                              <Text style={styles.landsHeader}>{land.name}</Text>
                           </TouchableOpacity>
                           <Collapsible collapsed={collapsedIndices[index]}>
                              {land.rides.map((ride, index2) => (
                              <View key={index2} style={styles.rideLabelsContainer}>
                              <Text style={styles.rideLabel}>{ride.name}:</Text>
                              <View style={styles.inlineContainer}>
                              <Text style={ride.wait_time <= 30
                                                               ? styles.waitGreen
                                                               : ride.wait_time <= 45
                                                               ? styles.waitYellow
                                                               : styles.waitRed }>
                              {ride.wait_time} minutes.</Text>
                              <Text style={[styles.rideLabel, ride.is_open ? styles.rideOpen : styles.rideClosed]}>{ride.is_open ? 'Open' : 'Closed'}</Text>
                              </View>
                              </View>
                              ))}
                                  </Collapsible>
                                 </View>
                              ))}

                  </View>

              </ScrollView>

              <CustomButton
                              title=""
                              onPress={() => navigation.navigate('Home')}
                              imageSource={require('../src/icons/homeIcon1.png')}
                            />


            </SafeAreaView>
            );
          };
export default CaliAdventureScreen;
