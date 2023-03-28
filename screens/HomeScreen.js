import React, {useEffect, useState} from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import {SunIcon, MoonIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Welcome")
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView className="bg-dark-grey flex-1 justify-between">
      
      <View className="px-10">
        <View className='display-flex flex-row items-center gap-3 px-2 my-4'>

          <TouchableOpacity
                onPress={handleSignOut}>
                    <Text className="text-white">Log out.</Text>
                </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
