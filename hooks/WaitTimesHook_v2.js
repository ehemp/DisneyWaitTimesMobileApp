import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import parkIDs from '../component/ParkIDs'




    const useWaitTimes = (screenName, resort) => {
      const [isLoading, setIsLoading] = useState(true);
      const  [ initialCollapsedState ] = useState({});
      const [attractions, setAttraction] = useState([]);





      const parkID2 = () => {

        let id = ""
        for (let i = 0; i < parkIDs[resort].parks.length; i++) {

            parkIDs[resort].parks[i][screenName] ? id = parkIDs[resort].parks[i][screenName].id : console.log("Searching...")

        }
        if (id) {
            console.log("Id found.")
            return id;
        }
        console.log("Did not find id.")
      }

          useEffect(() => {
            const fetchWaitTimes = async () => {
              try {
                const resPark = await axios.get(`https://api.themeparks.wiki/v1/entity/${parkIDs[resort].id}/live`);

                let attractionArray = [];
                for (let i = 0; i < resPark.data.liveData.length; i++) {


                    if (resPark.data.liveData[i].parkId === parkID2() && resPark.data.liveData[i].entityType === "ATTRACTION" && resPark.data.liveData[i].queue) {
                        attractionArray.push(resPark.data.liveData[i]);
                        let index = attractionArray.indexOf(resPark.data.liveData[i]);
                        initialCollapsedState[index] = true;

                        setAttraction(attractionArray);

                    }

                }

              } catch (error) {
                console.error('Error fetching wait times:', error);
              } finally {
                setIsLoading(false);
              }
            };

            fetchWaitTimes();
          }, [screenName]);

          return { isLoading, attractions, initialCollapsedState };
        };


export default useWaitTimes;
