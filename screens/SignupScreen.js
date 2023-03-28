import React, {useEffect, useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, SafeAreaView} from 'react-native'
import {db, auth} from "../firebase";
import {createUserWithEmailAndPassword, onAuthStateChanged, updateProfile} from "firebase/auth"
import {useNavigation} from "@react-navigation/core";
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

const SignupScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [phone, setPhone] = useState('')

    const navigation = useNavigation()


    const handleSignUp = () => {
        if (password !== passwordConfirmation) {
            alert("Passwords Do Not Match");
            return;
        }
        else{
            createUserWithEmailAndPassword(auth, email,password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                const userId = user.uid;
                db.ref('users/' + userId).set({
                    name: name,
                    email: email.toLowerCase(),
                    phone: phone,
                });
                // set the display name
                updateProfile(auth.currentUser, {
                    displayName: name
                });
            })
            .catch(error => {alert(error.message)
                handlePressOut()})
        }
    }

    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [passwordConfirmationFocused, setPasswordConfirmationFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    }
    const handlePressOut = () => {
        setIsPressed(false);
    }

    return (
        <KeyboardAvoidingView
            className='bg-dark-grey flex-1 flex-col justify-between items-center'
            behavior="padding"
        >
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
                    <Text className='text-white font-extrabold text-lg'>SIGN UP</Text>
                </View>
                <View className='pt-2'>
                    <Text className={`text-light-grey ${nameFocused ? 'text-white' : ''}`}>Name</Text>
                    <TextInput
                        value={name}
                        onChangeText={text=> setName(text)}
                        selectionColor={'#E6C466'}
                        className={`border-light-grey border-b-2 p-1 color-light-grey ${nameFocused ? 'border-gold color-gold' : ''}`}
                        onFocus={() => setNameFocused(true)}
                        onBlur={() => setNameFocused(false)}
                    />
                    <Text className={`text-light-grey pt-4 ${emailFocused ? 'text-white' : ''}`}>Email</Text>
                    <TextInput
                        selectionColor={'#E6C466'}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        className={`border-light-grey border-b-2 p-1 color-light-grey ${emailFocused ? 'border-gold color-gold' : ''}`}
                        autoCapitalize="none"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                    />
                    <Text className={`text-light-grey pt-4 ${phoneFocused ? 'text-white' : ''}`}>Phone</Text>
                    <TextInput
                        value={phone}
                        onChangeText={text=> setPhone(text)}
                        selectionColor={'#E6C466'}
                        className={`border-light-grey border-b-2 p-1 color-light-grey ${phoneFocused ? 'border-gold color-gold' : ''}`}
                        keyboardType = 'numeric'
                        onFocus={() => setPhoneFocused(true)}
                        onBlur={() => setPhoneFocused(false)}
                    />
                    <Text className={`text-light-grey pt-4 ${passwordFocused ? 'text-white' : ''}`}>Password</Text>
                    <TextInput
                        selectionColor={'#E6C466'}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        className={`border-light-grey border-b-2 p-1 color-light-grey ${passwordFocused ? 'border-gold color-gold' : ''}`}
                        secureTextEntry
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                    />
                    <Text className={`text-light-grey pt-4 ${passwordConfirmationFocused ? 'text-white' : ''}`}>Confirm Password</Text>
                    <TextInput
                        selectionColor={'#E6C466'}
                        value={passwordConfirmation}
                        onChangeText={text => setPasswordConfirmation(text)}
                        className={`border-light-grey border-b-2 p-1 color-light-grey ${passwordConfirmationFocused ? 'border-gold color-gold' : ''}`}
                        secureTextEntry
                        onFocus={() => setPasswordConfirmationFocused(true)}
                        onBlur={() => setPasswordConfirmationFocused(false)}
                    />
                </View>
                
            </SafeAreaView>

            <SafeAreaView className='w-10/12'>
                <TouchableOpacity
                    onPressIn={handlePressIn}
                    onPress={handleSignUp}
                    className={`bg-med-grey items-center h-12 rounded-md justify-center mb-4 ${isPressed ? 'bg-gold' : ''}`}
                    >
                <Text className={`text-light-grey text-xl ${isPressed ? 'text-dark-grey': ''}`}>JOIN OLYMPUS</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </KeyboardAvoidingView>
    )
}

export default SignupScreen