import * as React from 'react';
import { View, Text } from "react-native";

const AboutScreen = ({ navigation, route }) => {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>About Screen</Text>
</View>
   );
};



export default AboutScreen