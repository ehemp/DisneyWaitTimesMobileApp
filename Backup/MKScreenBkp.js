// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import base64 from 'base-64';
import Collapsible from 'react-native-collapsible';

const CustomButton = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.buttonImage} source={imageSource} style={styles.buttonImage} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const MKScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [landNames, getLands] = useState([]);
  const [rideNames, getRideNames] = useState([]);
  const [waitTimes, setWaitTimes] = useState([]);
  const [collapsedIndices, setCollapsedIndices] = useState({  "0": true, "1": true, "2": true, "3": true, "4": true, "5": true });


  useEffect(() => {
    fetchWaitTimes();
  }, []);

  const fetchWaitTimes = async () => {
    try {
      const response = await axios.get('https://queue-times.com/en-US/parks/6/queue_times.json');


      for (let m = 0; m < response.data.lands.length; m++) {
            //console.log("LANDS: ", response.data.lands[m].name, "DATA.LANDS", response.data.lands.length)
            getLands(response.data.lands)

     }

      setWaitTimes(response.data.lands);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching wait times:', error);
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
const toggleCollapse = (index) => {
    setCollapsedIndices((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    //console.log("CollapseIndices ", collapsedIndices)
  };


  return (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.header}>Magic Kingdom Wait Times</Text>
        <View style={styles.rideContainer}>
          {landNames.map((land, index) => (
              <View key={index} style={styles.rideContainer}>
                 <TouchableOpacity onPress={() => toggleCollapse(index)}>
                    <Text style={styles.landsHeader}>{land.name}</Text>
                 </TouchableOpacity>
                 <Collapsible collapsed={collapsedIndices[index]}>
                    {land.rides.map((ride, index2) => (
                    <View key={index2} style={styles.rideContainer}>
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
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                    imageSource={require('../src/icons/appIcon2-1.png')} // Replace with your image path
                  />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 0,
    backgroundColor: '#a3a3a3',
  },
  scrollView: {

  },
  centered: {
    justifyContent: 'center',
  },
  landsHeader: {
    marginTop: 20,
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Raleway-Bold',
  },
  rideLabel: {
    marginBottom: 5,
    fontSize: 18,
    fontFamily: 'Quicksand-Light'
  },
  waitGreen: {
    color: '#16a34a',
  },
  waitYellow: {
      color: '#facc15',
    },
  waitRed: {
    color: '#b91c1c',
  },
  rideOpen: {
      color: '#16a34a',
      marginLeft: 10,
    },
    rideClosed: {
      color: '#b91c1c',
      marginLeft: 10,
    },
    inlineContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          textAlign: 'center',
        },
  header: {
    fontSize: 28,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
  },
  buttonImage: {
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 25,
    borderColor: '#78716c',
    borderWidth: 3,
  },
  buttonText: {
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  rideContainer: {
    marginBottom: 10,
    marginLeft: 10,

  },
});

export default MKScreen;
