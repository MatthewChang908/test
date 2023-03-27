import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const SignupScreen = () => {
    
    const navigation = useNavigation()
  return (

    <SafeAreaView>
      <Text>SignupScreen</Text>
      <TouchableOpacity
            onPress={() => {navigation.navigate('Welcome')}}>
            <Text className='text-gold text-xl'>Back</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignupScreen