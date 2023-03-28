import { Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {auth} from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useNavigation } from '@react-navigation/core';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Logged in with: ", user.email);
            console.log("Logged in with: ", user.displayName);
        })
        .catch(error => {alert(error.message)
            handlePressOut()})
    }

    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    }
    const handlePressOut = () => {
        setIsPressed(false);
    }

    return (
        <KeyboardAvoidingView className='bg-dark-grey flex-1 flex-col justify-between items-center' behavior='padding'>
            
            <SafeAreaView className='w-10/12'>
                <View className='py-2 '>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Welcome')}}
                        className='display-flex flex-row items-center gap-1'>
                        <ChevronLeftIcon color="#E6C466" size={18} />
                        <Text className='text-gold text-lg'>Back</Text>
                    </TouchableOpacity>
                </View>
                <View className='display-flex flex-row gap-3 items-center py-3'>
                    <Image source={require('../assets/grecian_key.png')} />
                    <Text className='text-white font-extrabold text-lg'>LOG IN</Text>
                </View>

                <View className='pt-2'>
                    <Text className={`text-light-grey ${isFocused ? 'text-white' : ''}`}>Email</Text>
                    <TextInput
                        autoCapitalize='none'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        selectionColor={'#E6C466'}
                        className={`border-light-grey border-b-2 p-1 color-light-grey ${isFocused ? 'border-gold color-gold' : ''}`}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <Text className={`text-light-grey pt-2 ${isFocused2 ? 'text-white' : ''}`}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        selectionColor={'#E6C466'}
                        className={`border-light-grey border-b-2 p-1 color-light-grey ${isFocused2 ? 'border-gold color-gold' : ''}`}
                        secureTextEntry
                        onFocus={() => setIsFocused2(true)}
                        onBlur={() => setIsFocused2(false)}
                    />
                </View>
            </SafeAreaView>

            <SafeAreaView className='w-10/12'>
                <View>
                    <TouchableOpacity
                        onPress={handleLogin}
                        onPressIn={handlePressIn}
                        className={`bg-med-grey items-center h-12 rounded-md justify-center ${isPressed ? 'bg-gold': ''}`}>
                        <Text className={`text-light-grey text-xl ${isPressed ? 'text-dark-grey': ''}`}>LOG IN</Text>
                    </TouchableOpacity> 
                </View>
            </SafeAreaView>

        </KeyboardAvoidingView>
  )
}
export default LoginScreen
