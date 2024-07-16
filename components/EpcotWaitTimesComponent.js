import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const EpcotWaitTimesComponent = () => {
  const [waitTimes, setWaitTimes] = useState([]);

  useEffect(() => {
    const fetchWaitTimes = async () => {
      try {
        const response = await axios.get('https://queue-times.com/en-US/parks/5/queue_times.json', {
          headers: {
            Authorization: 'Bearer YOUR_API_KEY_HERE',
          },
        });
        console.log(response.data);
        setWaitTimes(response.data);
      } catch (error) {
        console.error('Error fetching wait times:', error);
      }
    };

    fetchWaitTimes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Disney World Wait Times</Text>
      {waitTimes.map((ride, index) => (
        <View key={index} style={styles.rideContainer}>
          <Text>{ride.name}</Text>
          <Text>{ride.waitTime} minutes</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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

export default EpcotWaitTimesComponent;
