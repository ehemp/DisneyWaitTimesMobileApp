import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export const parkNames = {
    mk: "Magic Kingdom",
    ak: "Animal Kingdom",
    ep: "Epcot",
    hs: "Hollywood Studios",
    dl: "Disneyland",
    ca: "California Adventure",
};

export const resortNames = {
    WDWR: "WDW Resort",
    DLR: "Disneyland Resort",
};

export const parkIndex = (pname) => {
        let resortN, parkN, index = null;
        for (let x = 0; x < Object.keys(parkIDs).length; x++) {
            resortN = Object.keys(parkIDs)[x]
            for (let i = 0; i < parkIDs[resortN].parks.length; i++) {
                parkIDs[resortN].parks[i][pname] ? index = i : console.log(i)
                if (index == i) {
                    return index;
                }
            }
        }
      }

const parkIDs = {

  "WDW Resort": {id: "e957da41-3552-4cf6-b636-5babc5cbc4e5", parks: [{ "Magic Kingdom": {
            id: "75ea578a-adc8-4116-a54d-dccb60765ef9", }
        },
         { "Animal Kingdom": {
            id: "1c84a229-8862-4648-9c71-378ddd2c7693", }
        },
         { "Epcot": {
            id: "47f90d2c-e191-4239-a466-5892ef59a88b", }
        },
         { "Hollywood Studios": {
            id: "288747d1-8b4f-4a64-867e-ea7c9b27bad8", }
        }]},
  "Disneyland Resort": {id: "bfc89fd6-314d-44b4-b89e-df1a89cf991e", parks: [{"Disneyland": {
            id: "7340550b-c14d-4def-80bb-acdb51d49a66", }
        },
        { "California Adventure": {
            id: "832fcd51-ea19-4e77-85c7-75d5843b127c", }
        },]

        }
};

export default parkIDs
