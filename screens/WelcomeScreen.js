import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        >
        <Text>Go to Login</Text>    
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen