import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton, Divider } from 'react-native-paper';
import { useRadioContext } from '../hooks/CheckComponent';


const SettingsScreen = ({ navigation, route }) => {
    const [checked, setChecked] = useState('default');
    //const { changeComponent } = useRadioContext();
    const sendChecked = {check: checked}

    /*if (checked) {
        changeComponent(sendChecked)
    }*/


   return (
<View style={settingsStyle.settingsContainer}>
<Text style={{fontSize:20,fontWeight:'700'}}>Settings Screen</Text>
<View style={settingsStyle.radioBtnContainer}>
    <View style={settingsStyle.textStyle}>
      <Text style={{fontSize:24,fontWeight:'700'}}>Default</Text>
      <Text style={{fontSize:24,fontWeight:'700'}}>Tab</Text>
    </View>
<View style={settingsStyle.check}>
      <RadioButton

        value="default"
        status={ checked === 'default' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('default')}
      />

      <RadioButton

        value="tab"
        status={ checked === 'tab' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('tab')}
      />

      </View>
    </View>
</View>
   );
};

const settingsStyle = StyleSheet.create({

    settingsContainer: {
        backgroundColor: '#fff5f5',
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    },

    radioBtnContainer: {
        flexDirection: 'row',
        padding: 0,
        alignItems: 'flex-start',
        paddingRight: '70%',


    },
    textStyle: {

        textAlign: 'left',
    },
    check: {
        color: '#334155',

   }

});

export default SettingsScreen;