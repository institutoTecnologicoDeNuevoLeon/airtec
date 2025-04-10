import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot } from 'expo-router'
import '../global';


const _layout = () => {
  return (
    <GestureHandlerRootView>
        <Slot/>
    </GestureHandlerRootView>
  )
}

export default _layout