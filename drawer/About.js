import * as React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import styles from '../styles/ParkScreenStyles_v2';

const AboutScreen = ({ navigation, route }) => {




   return (
<SafeAreaView style={styles.container}>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Choose your park and retrieve real-time attraction queue wait times!</Text>
</View>

</SafeAreaView>
   );
};



export default AboutScreen