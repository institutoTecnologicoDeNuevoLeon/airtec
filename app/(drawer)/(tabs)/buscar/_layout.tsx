//cspell:disable 
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack
      initialRouteName='index'
      screenOptions={{
        headerBackTitle: 'Regresar'
      }}>

      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Buscar',
          headerBackTitle: 'Regresar',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PTSerif-Bold',
            fontSize: 24
          }
        }} />

      <Stack.Screen
        name='Paises'
        options={{
            headerTitle: 'Paises',
            headerBackTitle: 'Regresar'
        }} />

      <Stack.Screen
        name='Estados'
        options={{
            headerTitle: 'Estados',
            headerBackTitle: 'Regresar'
        }} />

      <Stack.Screen
        name='Ciudades'
        options={{
            headerTitle: 'Ciudades',
            headerBackTitle: 'Regresar'
        }} />

    </Stack>
  )
}

export default _layout