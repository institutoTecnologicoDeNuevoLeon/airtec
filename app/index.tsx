//cspell:disable 
import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    //<Redirect href={'./(drawer)/(tabs)'} />
    //<Redirect href={'./(drawer)/acerca'} />
    <Redirect href={'./(drawer)/(tabs)/buscar'} />

  )
}

export default index