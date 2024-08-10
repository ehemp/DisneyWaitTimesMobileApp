// App.js

import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { ModalProvider } from '../context/ModalContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StackNav from '../navigation/StackNavigation';
import AboutScreen from '../drawer/About';
import SettingsScreen from '../drawer/Settings';
import Menu from '../drawer/Menu';
import EpcotScreen from '../screens/EpcotScreen';
import MKScreen from '../screens/MKScreen';
import AKScreen from '../screens/AKScreen';
import HStudiosScreen from '../screens/HStudiosScreen';
import DisneylandScreen from '../screens/DisneylandScreen';
import CaliAdventureScreen from '../screens/CaliAdventureScreen';
import CaliforniaScreen from '../screens/CaliforniaScreen';
import FloridaScreen from '../screens/FloridaScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsCard from '../cards/DetailsCard';
import { version } from '../package.json';



const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate('Menu', { screen: 'Home' })}
        />
        <Divider />
        <DrawerItem
                  label="About"
                  onPress={() => props.navigation.navigate('About')}
                />
                <Divider />
      <DrawerItem
                label="Settings"
                onPress={() => props.navigation.navigate('Settings')}
              />
               <Divider />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
      <Text style={{textAlign: 'center',}}>Version: {version}</Text>
    </DrawerContentScrollView>
  );
}



const App = () => {

  return (

<NavigationContainer>
    <Drawer.Navigator
      initialRouteName = 'Menu'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={() => ({ headerStyle: { backgroundColor: '#0e1428', },
                       headerTintColor: '#f6f1ea',
                       headerTitleStyle: {
                       fontWeight: 'bold', color: '#f6f1ea',},
                       drawerStyle: {backgroundColor: '#f8f2ec'},
                       })}
    >
        <Drawer.Screen name="Menu" component={StackNav} options={{ drawerItemStyle: {height: 0}}} />
        <Drawer.Screen name="About" component={AboutScreen} options={{ drawerItemStyle: {height: 0}}} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ drawerItemStyle: {height: 0}}} />

      {/* Add more Drawer Screens as needed */}
    </Drawer.Navigator>
</NavigationContainer>

  );
};




const styles = StyleSheet.create({
    menuHeader: {
        backgroundColor: '#f8f2ec',
    }



})

export default App;
