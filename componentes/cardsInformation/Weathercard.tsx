//cspell:disable 
import { View, Text, Image } from 'react-native'
import React from 'react'

const Weathercard = ({temperatura, humedad, hora, viento}) => {
  
    const horaActual = new Date().getHours();

    const dia = horaActual >= 6 && horaActual < 18 ;
  
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', 
            padding: 10, backgroundColor: '#fbfbf2', borderRadius:20}}>

          {/* Primer icono y su dato */}
          <View style={{ alignItems: 'center' }}>
              
              {dia ?(
                  <Image source={require('../../assets/images/iconosClima/sol.png')} style={{ width: 30, height: 30 }} />

              ):(
                    <Image source={require('../../assets/images/iconosClima/luna-llena.png')} style={{ width: 30, height: 30 }} />

              )}
              <Text>{temperatura} C°</Text>
          </View>

          {/* Tercer icono y su dato */}
          <View style={{ alignItems: 'center' }}>
              <Image source={require('../../assets/images/iconosClima/viento.png')} style={{ width: 30, height: 30 }} />
              <Text>{viento} km/h</Text>
          </View>

          {/* Segundo icono y su dato */}
          <View style={{ alignItems: 'center' }}>
              <Image source={require('../../assets/images/iconosClima/gotas.png')} style={{ width: 30, height: 30 }} />
              <Text>{humedad} %</Text>
          </View>
      </View>
  )
}

export default Weathercard