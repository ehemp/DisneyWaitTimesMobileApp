// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import base64 from 'base-64';
import Collapsible from 'react-native-collapsible';

const CustomButton = ({ title, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={imageSource} style={styles.buttonImage} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const EpcotScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [landNames, getLands] = useState([]);
  const [rideNames, getRideNames] = useState([]);
  const [waitTimes, setWaitTimes] = useState([]);
  const [collapsedIndices, setCollapsedIndices] = useState({});

  useEffect(() => {
    fetchWaitTimes();
  }, []);

  const fetchWaitTimes = async () => {
    try {
      const response = await axios.get('https://queue-times.com/en-US/parks/5/queue_times.json');


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
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Epcot Wait Times</Text>
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
                    <Text style={ride.wait_time <= 30
                                                     ? styles.waitGreen
                                                     : ride.wait_time <= 45
                                                     ? styles.waitYellow
                                                     : styles.waitRed }>
                    {ride.wait_time} minutes.</Text>
                    </View>
                    ))}
                        </Collapsible>
                       </View>
                    ))}

        </View>
        <CustomButton
                title="Go Home"
                onPress={() => navigation.navigate('Home')}
                imageSource={require('../src/icons/homeMickey2.png')} // Replace with your image path
              />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 0,
  },
  centered: {
    justifyContent: 'center',
  },
  landsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rideLabel: {
    fontSize: 14,
  },
  waitGreen: {
    color: '#16a34a',
  },
  waitYellow: {
      color: '#fde047',
    },
  waitRed: {
    color: '#b91c1c',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rideContainer: {
    marginBottom: 10,
  },
});

export default EpcotScreen;
