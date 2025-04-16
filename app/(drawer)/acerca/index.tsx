//cspell:disable 
import { View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import InformationCard from '../../../componentes/cardsInformation/InformationCard';

const index = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/fondos/ghibiTec.png')}
      style={{ flex: 1 }}>

      {/* Capa con fondo oscuro/transparente encima del fondo */}
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.6)',
        alignItems: 'center'
      }}>
        <Image
          source={require('../../../assets/images/itnl/acercaDe.png')}
          className='w-40 h-40 rounded-full shadow-black shadow-2xl mb-10 mt-10'
        />


        <InformationCard />


        {/* <AqiUsCard /> */}
      </View>

    </ImageBackground>
  )
}

export default index
