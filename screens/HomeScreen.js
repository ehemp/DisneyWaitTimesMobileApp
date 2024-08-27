import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import styles from '../styles/LocationsScreen';
import {changeComponentHook} from '../hooks/CheckComponent';
import { useModal } from '../context/ModalContext';



const CustomButtonCaliScreen = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttonBanners} >
          <Image style={styles.buttonImage} source={imageSource} />
          </View>
        </TouchableOpacity>
  );
};

const CustomButtonFloridaScreen = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttonBanners} >
          <Image style={styles.buttonImage} source={imageSource} />
          </View>
        </TouchableOpacity>
  );
};

const CustomButtonFavoriteScreen = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttonBanners} >
          <Image style={styles.buttonImage} source={imageSource} />
          </View>
        </TouchableOpacity>
  );
};



const HomeScreen = ({ navigation }) => {
    const { showSignOut } = useModal();
    useFocusEffect(
            React.useCallback(() => {
              showSignOut();
              // Do something when the screen is focused
              return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
              };
            }, [])
          );
    /*useEffect(() => {
                const unsubscribe = navigation.addListener('focus', () => {
                  // do something
                  if (changeComponentHook) {
                    const component = changeComponentHook();
                    console.log("HomeScreen ", component)
                  }

                });

                return unsubscribe;
              }, [navigation]);*/
    return (
      <SafeAreaView style={styles.safeView} >

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <CustomButtonCaliScreen
                                          title="Cali"
                                          onPress={() => navigation.navigate('California Parks')}
                                          imageSource={require('../src/icons/californiaParksBanner1.png')}
                                        />
          <CustomButtonFloridaScreen
                                        title="Fl"
                                        onPress={() => navigation.navigate('Florida Parks')}
                                        imageSource={require('../src/icons/floridaParksBanner1.png')}
                                      />

        <CustomButtonFavoriteScreen
                                        title="Fav"
                                        onPress={() => navigation.navigate('Favorites')}
                                        imageSource={require('../src/icons/tempFavoriteBanner.png')}
                                      />
        </View>
      </ScrollView>

      </SafeAreaView>

      );



};




export default HomeScreen;