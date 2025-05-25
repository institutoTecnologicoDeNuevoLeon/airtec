//cspell:disable 
import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Calculadora2 from '../../../../componentes/Elementos/Calculadora2'

const index = () => {
  return (
    <ImageBackground
      source={require('../../../../assets/images/fondos/fondo1.jpg')}
      className="flex-1 justify-center items-center">

      <View style={{ backgroundColor: 'rgba(255,255,255,0.85)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />

      <View className='justify-center items-center mt-5'>
        

        {/* calculadoraCard */}
        <Calculadora2 />
      </View>
    </ImageBackground>
  )
}

export default index