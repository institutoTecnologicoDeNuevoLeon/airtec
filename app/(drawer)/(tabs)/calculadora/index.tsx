//cspell:disable 
import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Calculadora from '../../../../componentes/Elementos/Calculadora'

const index = () => {
  return (
    <View className='justify-center items-center mt-5'>
      <Text className='font-[PTSerif-Bold] text-2xl text-center'>
        Datos obtenidos en tu monitor
      </Text>

      {/* calculadoraCard */}
      <Calculadora/>
    </View>
  )
}

export default index