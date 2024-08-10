// App.js

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { ModalProvider } from '../context/ModalContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AboutScreen from '../drawer/About';
import SettingsScreen from '../drawer/Settings';
import Menu from '../drawer/Menu';
import EpcotScreen from '../screens/EpcotScreen';
import EpcotScreen_v2 from '../screens_v2/EpcotScreen_v2';
import MKScreen from '../screens/MKScreen';
import MKScreen_v2 from '../screens_v2/MKScreen_v2';
import AKScreen from '../screens/AKScreen';
import AKScreen_v2 from '../screens_v2/AKScreen_v2';
import HStudiosScreen from '../screens/HStudiosScreen';
import HStudiosScreen_v2 from '../screens_v2/HStudiosScreen_v2';
import DisneylandScreen from '../screens/DisneylandScreen';
import DisneylandScreen_v2 from '../screens_v2/DisneylandScreen_v2';
import CaliAdventureScreen from '../screens/CaliAdventureScreen';
import CaliAdventureScreen_v2 from '../screens_v2/CaliAdventureScreen_v2';
import CaliforniaScreen from '../screens/CaliforniaScreen';
import FloridaScreen from '../screens/FloridaScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsCard from '../cards/DetailsCard';
import OpenDrawer from '../screens/HomeScreen';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const App = () => {
                 return (
                 <ModalProvider>
                   <NavigationContainer>
                     <Stack.Navigator initialRouteName="Home" screenOptions={({navigation}) => ({ headerStyle: { backgroundColor: '#fff5f5', },
                       headerTintColor: '#1e293b',
                       headerTitleStyle: {
                       fontWeight: 'bold', color: '#1e293b',},
                       headerLeft: () => (
                                     <Button
                                       onPress={() => Menu}
                                       title="Menu"
                                       color="#1e293b"
                                     />
                                   ),
                       })}>
                       <Stack.Screen name="Magic Kingdom" component={MKScreen_v2} />
                       <Stack.Screen name="Animal Kingdom" component={AKScreen_v2} />
                       <Stack.Screen name="Epcot" component={EpcotScreen_v2} />
                       <Stack.Screen name="Hollywood Studios" component={HStudiosScreen_v2} />
                       <Stack.Screen name="Disneyland" component={DisneylandScreen_v2} />
                       <Stack.Screen name="California Adventure" component={CaliAdventureScreen_v2} />
                       <Stack.Screen name="Florida Parks" component={FloridaScreen} />
                       <Stack.Screen name="California Parks" component={CaliforniaScreen} />
                       <Stack.Screen name="Home" component={HomeScreen} />
                       <Stack.Screen name="Details" component={DetailsCard} />
                     </Stack.Navigator>
                   </NavigationContainer>

                 </ModalProvider>
                 );
               };






const styles = StyleSheet.create({
    menuHeader: {
        backgroundColor: '#1e293b',
    }



})

export default App;
