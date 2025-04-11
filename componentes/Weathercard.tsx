//cspell:disable 
import { View, Text, Image } from 'react-native'
import React from 'react'

const Weathercard = () => {
  return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

          {/* Primer icono y su dato */}
          <View style={{ alignItems: 'center' }}>
              <Image source={require('../assets/images/Moderado.png')} style={{ width: 30, height: 30 }} />
              <Text>Dato 1</Text>
          </View>

          {/* Segundo icono y su dato */}
          <View style={{ alignItems: 'center' }}>
              <Image source={require('../assets/images/Moderado.png')} style={{ width: 30, height: 30 }} />
              <Text>Dato 2</Text>
          </View>

          {/* Tercer icono y su dato */}
          <View style={{ alignItems: 'center' }}>
              <Image source={require('../assets/images/Moderado.png')} style={{ width: 30, height: 30 }} />
              <Text>Dato 3</Text>
          </View>

      </View>
  )
}

export default Weathercard