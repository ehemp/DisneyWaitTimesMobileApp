// App.js

import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { ModalProvider } from '../context/ModalContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { parkNames } from '../component/ParkIDs';
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
import ParkScreen from '../screens_v2/ParkScreen';
import FavScreen from '../screens_v2/FavScreen';
import UserRegisterScreen from '../screens_v2/UserRegisterScreen';
import UserSignInScreen from '../screens_v2/UserSignInScreen';




const Stack = createNativeStackNavigator();

const StackNav = () => {

                 return (
                 <ModalProvider>

                     <Stack.Navigator initialRouteName="Sign In" screenOptions={{ headerShown: false }}>
                       <Stack.Screen name="Register" component={UserRegisterScreen} />
                       <Stack.Screen name="Sign In" component={UserSignInScreen} />
                       <Stack.Screen name="Home" component={HomeScreen} />
                       <Stack.Screen name='Florida Parks' component={FloridaScreen} />
                       <Stack.Screen name="California Parks" component={CaliforniaScreen} />
                       <Stack.Screen name="Favorites" component={FavScreen} />
                       <Stack.Screen name="Details" component={DetailsCard} />
                       <Stack.Screen name="ParkScreen" component={ParkScreen} />
                     </Stack.Navigator>


                 </ModalProvider>
                 );
               };






const styles = StyleSheet.create({
    menuHeader: {
        backgroundColor: '#1e293b',
    }



})

export default StackNav;
