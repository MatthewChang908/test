import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name={"Welcome"} component={WelcomeScreen}/>
          <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name={"Login"} component={LoginScreen}/>
          <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name={"Signup"} component={SignupScreen}/>
          <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name={"Home"} component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}