// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';


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
const resort = "WDW Resort";
  return (
  <SafeAreaView style={styles.safeView}>

  <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
      <CustomButtonMK
                        title=""
                        onPress={() => navigation.navigate('Magic Kingdom', {park: 'Magic Kingdom', destination: resort})}
                        imageSource={require('../src/icons/mkBanner4.png')}
                      />

      <CustomButtonAK
                          title=""
                          onPress={() => navigation.navigate('Animal Kingdom', {park: 'Animal Kingdom', destination: resort})}
                          imageSource={require('../src/icons/akBanner2.png')}
                        />
      <CustomButtonEpcot
                          title=""
                          onPress={() => navigation.navigate('Epcot', {park: 'Epcot', destination: resort})}
                          imageSource={require('../src/icons/epcotBanner2.png')}
                        />
      <CustomButtonHS
                            title=""
                            onPress={() => navigation.navigate('Hollywood Studios', {park: 'Hollywood Studios', destination: resort})}
                            imageSource={require('../src/icons/hsBanner2.png')}
                          />

    </View>
  </ScrollView>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#fff5f5',
  },
  container: {
    flex: 1,
    paddingTop: 0,
    marginBottom: 220,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: '40%',
    backgroundColor: '#fff5f5',

  },

  scrollView: {
    //backgroundColor: '#64748b',
    },
  centered: {
    justifyContent: 'center',
  },

  buttonBanners: {
      width: '100%',
      justifyContent: 'center',
      borderWidth: 1,
      marginBottom: 3,
      marginTop: 3,
      paddingTop: 0,
      paddingBottom: 0,
      //borderColor: 'black',


    },
  buttonText: {
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 4,
    paddingBottom: 10,
    paddingTop: 10,
    width: 30,
  },
  buttonImage: {
    marginTop: 0,
    marginBottom: 0,
    //flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonImageHS: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    //marginLeft: 14,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Raleway-Bold',
  },

});

export default FloridaScreen;
