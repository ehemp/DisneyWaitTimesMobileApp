import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';






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

const HomeScreen = ({ navigation }) => {

    return (
      <SafeAreaView style={styles.safeView}>

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

  header: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Raleway-Bold',
  },

});

export default HomeScreen;