// App.js

import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { ModalProvider } from '../context/ModalContext';
import { NavigationContainer, useFocusEffect  } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StackNav from '../navigation/StackNavigation';
import AboutScreen from '../drawer/About';
import SettingsScreen from '../drawer/Settings';
import Menu from '../drawer/Menu';
import UserSignInScreen from '../screens_v2/UserSignInScreen';
import CaliforniaScreen from '../screens/CaliforniaScreen';
import FloridaScreen from '../screens/FloridaScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsCard from '../cards/DetailsCard';
import { version } from '../package.json';
import { drawerItem, drawerItemReg, useModal } from '../context/ModalContext';
import UserRegisterScreen from '../screens_v2/UserRegisterScreen';



const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {


  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
          label="Home"
          display={drawerItem.show ? 'none' : 'flex'}
          onPress={() => props.navigation.navigate('Menu', { screen: 'Home' })}
        />
        <Divider />
        <DrawerItem
                  label="About"
                  display={drawerItem.show ? 'none' : 'flex'}
                  onPress={() => props.navigation.navigate('About')}
                />
                <Divider />
      <DrawerItem
                label="Settings"
                display={drawerItem.show ? 'none' : 'flex'}
                onPress={() => props.navigation.navigate('Settings')}
              />
               <Divider />
      <DrawerItem
              label="Sign Out"
              display={drawerItem.show ? 'none' : 'flex'}
              onPress={() => props.navigation.navigate('Sign In')}
            />
      <DrawerItem
                label="Sign In"
                display={drawerItemReg.show ? 'flex' : 'none'}
                onPress={() => props.navigation.navigate('Sign In')}
              />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
      <Text style={{textAlign: 'center',}}>Version: {version}</Text>
    </DrawerContentScrollView>
  );
}


const App = ({ navigation }) => {



  return (

<NavigationContainer>
    <ModalProvider>
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
        <Drawer.Screen name="Sign Out" component={UserSignInScreen} options={{ drawerItemStyle: {height: 0}}} />
        <Drawer.Screen name="Sign In" component={UserSignInScreen} options={{ drawerItemStyle: {height: 0}}} />

      {/* Add more Drawer Screens as needed */}
    </Drawer.Navigator>
    </ModalProvider>
</NavigationContainer>

  );
};




const styles = StyleSheet.create({
    menuHeader: {
        backgroundColor: '#f8f2ec',
    }



})

export default App;
