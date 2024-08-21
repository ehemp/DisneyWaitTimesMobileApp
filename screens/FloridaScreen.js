// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { parkNames, resortNames } from '../component/ParkIDs';
import styles from '../styles/LocationsScreen';


const CustomButtonEpcot = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.buttonBanners} >
      <Image style={styles.buttonImage} source={imageSource} />
      </View>
    </TouchableOpacity>
  );
};

const CustomButtonAK = ({ title, onPress, imageSource }) => {
  return (

    <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.buttonBanners} >
      <Image style={styles.buttonImage} source={imageSource} />
      </View>
    </TouchableOpacity>
  );
};

const CustomButtonMK = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.buttonBanners} >
      <Image style={styles.buttonImage} source={imageSource} />
      </View>
    </TouchableOpacity>
  );
};

const CustomButtonHS = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.buttonBanners} >
      <Image style={styles.buttonImage} source={imageSource} />
      </View>
    </TouchableOpacity>
  );
};


const FloridaScreen = ({ navigation }) => {
const resort = resortNames.WDWR;
  return (
  <SafeAreaView style={styles.safeView}>

  <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
      <CustomButtonMK
                        title=""
                        onPress={() => navigation.navigate('ParkScreen', {park: parkNames.mk, destination: resort})}
                        imageSource={require('../src/icons/mkBanner4.png')}
                      />

      <CustomButtonAK
                          title=""
                          onPress={() => navigation.navigate('ParkScreen', {park: parkNames.ak, destination: resort})}
                          imageSource={require('../src/icons/akBanner2.png')}
                        />
      <CustomButtonEpcot
                          title=""
                          onPress={() => navigation.navigate('ParkScreen', {park: parkNames.ep, destination: resort})}
                          imageSource={require('../src/icons/epcotBanner2.png')}
                        />
      <CustomButtonHS
                            title=""
                            onPress={() => navigation.navigate('ParkScreen', {park: parkNames.hs, destination: resort})}
                            imageSource={require('../src/icons/hsBanner2.png')}
                          />

    </View>
  </ScrollView>

  </SafeAreaView>
  );
};



export default FloridaScreen;
