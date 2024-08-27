import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInUser, getUsers } from '../api/userAPI';  // Import your API functions
import { useFocusEffect } from '@react-navigation/native';
import { useModal, showSignOut, hideSignOut } from '../context/ModalContext';
import { signOutObj } from '../context/ModalContext';


const UserSignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {showSignOut, hideSignOut} = useModal();
  const [emptyText, setEmptyText] = useState('');

    useFocusEffect(
        React.useCallback(() => {
          //alert('Screen was focused');
          hideSignOut();
          // Do something when the screen is focused
          return () => {
            //alert('Screen was unfocused');
            //showSignOut();
            setEmptyText('');
            setMessage(emptyText);
            setUsername('');
            setPassword('');
            // Do something when the screen is unfocused
            // Useful for cleanup functions
          };
        }, [])
      );


  const handleSignIn = async () => {

    const response = await signInUser(username, password);
    try {
        //console.log("SIGNIN", response)
        for (let i in response) {
            //console.log(response[i].username, username, password, response[i].password)
            if (response[i].username == username && response[i].password == password) {
                navigation.navigate('Home')
                setMessage('');
            }
            else if (response[i].username == username) {
                if (response[i].password != password) {
                    setMessage("Incorrect password.")
                }

            }
            else if (response[i].password == password) {
                if (response[i].username != username) {
                    setMessage("Incorrect username.")
                }
            }
            else if (response[i].username != username && response[i].password != password){
                setMessage("User does not exist. Please register.");
            }
        }
        if (response.length === 0) {
            setMessage("User does not exist. Please register.");
        }
    }
    catch(error) {
        console.log("signIn:", error, response)
        setMessage("User does not exist. Please register.");
        }
  };

  const fetchUsers = async () => {
    const users = await getUsers();
    console.log("fetchUsers:", users);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        defaultValue={emptyText}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        defaultValue={emptyText}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Text>{message}</Text>
    </View>
  );
};

export default UserSignInScreen;
