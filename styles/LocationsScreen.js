import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#f8f2ec',
    flex: 1,
  },
  container: {

    paddingTop: 0,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 0,
    marginTop: '35%',
    backgroundColor: '#f6f1ea',

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
      marginBottom: 0,
      marginTop: 0,
      paddingTop: 0,
      paddingBottom: 0,
      borderColor: 'black',


    },
  buttonText: {
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 4,
    paddingBottom: 0,
    paddingTop: 0,
    width: 30,
  },
  buttonImage: {
    marginTop: 0,
    marginBottom: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonImageHS: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',

  },
  header: {
    fontSize: 24,
    marginBottom: 0,
    fontFamily: 'Raleway-Bold',
  },

});

export default styles;