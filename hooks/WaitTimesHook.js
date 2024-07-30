import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';




    const useWaitTimes = (screenName) => {
      const [isLoading, setIsLoading] = useState(true);
      const  [ initialCollapsedState ] = useState({});
      const [lands, setLands] = useState([]);
      //console.log("PARAMS: ", Stack)


      const parkId = (resPark) => {
      let getParkId = "";
      const localPark = resPark.data.map((park) => park.parks.map((localPark) => localPark));
      for (let i in localPark[14].map((index) => index.name)) {
           localPark[14].map((index) => index.name)[i].replace(/Disney /gi, "") === screenName ? getParkId = localPark[14].map((index) => index.id)[i] : "N/A";
         }
         return getParkId;
      }
        /*switch (parkName) {
        case 'Epcot': { return 5 }
        case 'Magic Kingdom': { return 6 }
        case 'Hollywood Studios': { return 7 }
        case 'Animal Kingdom': { return 8 }
        case 'Disneyland': { return 16 }
        case 'California Adventure': { return 17 }

        }

      }*/

          useEffect(() => {
            const fetchWaitTimes = async () => {
              try {
                const resPark = await axios.get("https://queue-times.com/en-US/parks.json");
                const response = await axios.get(`https://queue-times.com/en-US/parks/${parkId(resPark)}/queue_times.json`);

                for (let m = 0; m < response.data.lands.length; m++) {
                            //console.log("LANDS: ", response.data.lands[m].name, "DATA.LANDS", response.data.lands.length)
                            let index = response.data.lands.indexOf(response.data.lands[m]);
                            setLands(response.data.lands);
                            initialCollapsedState[index] = true;
                      }
                  //Object.preventExtensions(initialCollapsedState)
              } catch (error) {
                console.error('Error fetching wait times:', error);
              } finally {
                setIsLoading(false);
              }
            };

            fetchWaitTimes();
          }, [screenName]);
          //console.log("HOOK ", lands)
          return { isLoading, lands, initialCollapsedState };
        };


export default useWaitTimes;
