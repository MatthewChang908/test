import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import {auth} from "../firebase";

const WelcomeScreen = () => {

    const navigation = useNavigation()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

  return (
    <View className='bg-dark-grey flex-1 flex-col justify-between items-center'>
        <View className=''>
            <Image className='justify-center items-center mt-64' source={require('../assets/Logo.png')}/>
        </View>
        <View className='w-10/12 mb-24'>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Login')}}
                className='bg-dark-grey w-full p-0 rounded-md h-12 border-gold border-2 justify-center items-center'>
                <Text className='text-gold text-xl'>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {navigation.navigate('Signup')}}
                className='bg-gold mt-5 p-0 border-2 border-gold rounded-md h-12 w-full justify-center items-center'>              
                <Text className='text-black text-xl'>JOIN OLYMPUS</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default WelcomeScreen