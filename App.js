import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { View, Text, StyleSheet } from "react-native"

import {UserProvider} from './src/context/UserContext'
import {FirebaseProvider} from "./src/context/FirebaseContext"
import { createStackNavigator } from '@react-navigation/stack';

import AppStackScreens from "./src/stacks/AppStackScreens"
const Stack = createStackNavigator();
import {FirstScreenNavigator} from './src/stacks/CustomNavigation'


export default App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
          <NavigationContainer >
            <AppStackScreens />
            </NavigationContainer>  
        </UserProvider>
    </FirebaseProvider>
    
  );
};
 