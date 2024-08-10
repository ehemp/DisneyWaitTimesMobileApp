import React, { createContext, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton, Divider } from 'react-native-paper';

const RadioContext = createContext();
const changeComponentHook = (getChecked) => {
    //const [checked, setChecked] = useState('default');
    const  [ getComponent, setComponent ] = useState();

    if (getChecked){useEffect(() => {
                                    const changeComponent = async () => {
                                      try {
                                        console.log("check", getChecked)
                                        if (getChecked.check) {
                                            const switchRadio = () => {switch (getChecked.check) {
                                                   case 'tab': {return 'California Parks'}
                                                   default: {return 'Florida Parks'}
                                                        }}
                                            setComponent(switchRadio());
                                        }


                                      } catch (error) {
                                        console.error('Error fetching radio button selection:', error);
                                      } finally {
                                        console.log("Finally: ", getComponent);
                                      }
                                    };

                                    changeComponent();

                                  }, [getChecked]);}


              console.log("return ", getComponent);
            return  getComponent
            }

export const useRadioContext = () => useContext(RadioContext);
export default RadioContext;