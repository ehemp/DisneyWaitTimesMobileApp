import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { registerUser, getUsers } from '../api/userAPI';  // Import your API functions
import { useModal } from '../context/ModalContext';
import { drawerItem } from '../context/ModalContext';
// TODO: hide drawer items
// TODO: hash passwords
const UserRegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {showSignOutReg, hideSignOutReg} = useModal();
  const uniqueError = {code: '23505'};
  const emptyError = {code: '23514'};

    useFocusEffect(
            React.useCallback(() => {
              //alert('Screen was focused');
              hideSignOutReg();
              //console.log("REG Focus", drawerItem.show)
              // Do something when the screen is focused
              return () => {
                //alert('Screen was unfocused');
                showSignOutReg();
                //console.log("REG Unfocus", drawerItem.show)
                setMessage('');
                setUsername('');
                setPassword('');
                // Do something when the screen is unfocused
                // Useful for cleanup functions
              };
            }, [])
          );

  const handleRegister = async () => {
    const response = await registerUser(username, password);
    try {

        if (response.code != emptyError.code) {
            const checkUser = await fetchUsers();

            for (let i in checkUser) {
            console.log(checkUser[i].username, username)

                if (response.code === uniqueError.code) {
                    setMessage('username is taken.')
                    console.log("REGISTER error code:", response.code)

                }
                else {
                    console.log("Logging in.", response)
                    navigation.navigate('Home')
                    setMessage('');
                    return;
                }
            }
        }
        else {
            setMessage("username and/or password cannot be empty.")
        }
    }

    catch(error) {
        console.log("handleRegister:", error)
        }
  };

  const fetchUsers = async () => {
    const users = await getUsers();
    return users;
    //console.log("fetchUsers:", users);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Fetch Users" onPress={fetchUsers} />
      <Button title="Sign In" onPress={() => navigation.navigate('Sign In')} />
      <Text>{message}</Text>
    </View>
  );
};

export default UserRegisterScreen;
