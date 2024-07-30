import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 0,
    backgroundColor: '#fff5f5',
  },
  scrollView: {

  },
  centered: {
    justifyContent: 'center',
  },
  landsHeader: {
    marginTop: 1,
    fontSize: 24,
    color: '#0f172a',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Raleway-Bold',
  },
  rideLabel: {
    marginBottom: 5,
    fontSize: 22,
    color: '#334155',
    fontFamily: 'Quicksand-Medium',
    padding: 5,
    textAlign: 'center',
  },
  rideDetails: {
    paddingLeft: 0,
  },
  waitGreen: {
    color: '#047857',
    fontSize: 19,
  },
  waitYellow: {
      color: '#facc15',
      fontSize: 19,
    },
  waitRed: {
    color: '#b91c1c',
    fontSize: 19,
  },
  rideOpen: {
    color: '#047857',
    marginLeft: 10,
    fontSize: 20,
  },
  rideClosed: {
    color: '#b91c1c',
    marginLeft: 10,
    fontSize: 20,
  },
  inlineContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  header: {
    justifyContent: 'center',
    fontSize: 28,
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
    paddingTop: 5,
  },
  headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 10,
    },
  buttonImage: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 10,
      borderColor: '#78716c',
      borderWidth: 0,
    },
    buttonImageAccordion: {
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5,
    },
    expandAllBtn: {
        borderColor: 'transparent',
        paddingLeft: 0,
        marginLeft: 0,


    },
  buttonText: {
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonImageInline: {

  },
  rideContainer: {
    marginBottom: 0,
    paddingTop: 5,

  },
  rideLabelsContainer: {
      marginBottom: 10,
      margin: 5,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderTopWidth: 2,
      borderRadius: 7,
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 8,
      paddingTop: 0,
      textAlign: 'center',
    },
});

export default styles;