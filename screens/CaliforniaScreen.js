// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';


const CustomButtonDisneyland = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.buttonBanners} >
      <Image style={styles.buttonImage} source={imageSource} />
      </View>
    </TouchableOpacity>
  );
};

const CustomButtonCaliAdventure = ({ title, onPress, imageSource }) => {
  return (

    <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.buttonBanners} >
      <Image style={styles.buttonImage} source={imageSource} />
      </View>
    </TouchableOpacity>
  );
};




const CaliforniaScreen = ({ navigation }) => {
const resort = 'Disneyland Resort';
  return (
  <SafeAreaView style={styles.safeView}>

  <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
      <CustomButtonDisneyland
                                title=""
                                onPress={() => navigation.navigate('Disneyland', {park: 'Disneyland', destination: resort})}
                                imageSource={require('../src/icons/disneylandBanner1.png')}
                              />

      <CustomButtonCaliAdventure
                                      title=""
                                      onPress={() => navigation.navigate('California Adventure', {park: 'California Adventure', destination: resort})}
                                      imageSource={require('../src/icons/caliadBanner1.png')}
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
    marginBottom: 500,
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
    paddingBottom: 25,
    paddingTop: 30,
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

export default CaliforniaScreen;
