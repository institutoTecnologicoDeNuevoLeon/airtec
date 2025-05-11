//cspell:disable 
import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const recomendaciones = [
  "Escoja una actividad menos extenuante",
  "Reduzca el tiempo de sus actividades al aire libre",
  "Reprograme las actividades",
  "Pasar menos tiempo junto a calles con mucho tránsito",
];

const personasVulnerables = [
  "Personas con enfermedades cardiovasculares (afecciones del corazón y los vasos sanguíneos)",
  "Personas con enfermedades pulmonares, como asma y EPOC",
  "Niños y adolescentes",
  "Adultos mayores",
  "La investigación indica que la obesidad y la diabetes pueden aumentar el riesgo",
  "Es conveniente también que las madres de recién nacidos y las embarazadas tomen medidas para proteger la salud de sus bebés"
]

const ambientesCerrados = [
  "Elimine el humo del tabaco",
  "Disminuya el uso de cocinas a leña y chimeneas",
  "Utilice filtros de aire HEPA y purificadores de aire diseñados para reducir las partículas",
  "No encienda velas",
]



const recomendations = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <ImageBackground source={require('../../../../assets/images/fondos/fondo1.jpg')}
        className="flex-1 justify-center items-center">

        <View style={{ backgroundColor: 'rgba(255,255,255,0.85)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />


        <View className='flex-1 bg-fondoSticky items-center border-gray-300 border-b-4 
                          border-r-2 shadow-lg rounded-xl p-4 mt-5' style={{ transform: 'scale(0.90) rotate(1deg)' }}>
          <Text className='text-center text-xl font-bold mb-5'>
            ¿Que hacer si el pronóstico AQI no es bueno?</Text>
          <View className="ml-2">
            {recomendaciones.map((item, index) => (
              <Text key={index} className="mb-1 text-lg">
                {'\u2022'} {item} {'\n'}
              </Text>
            ))}
          </View>
        </View>

        <View className='flex-1 bg-fondoSticky2 items-center border-gray-300 border-b-4 
                          border-r-2 shadow-lg rounded-xl p-4' style={{ transform: 'scale(0.90) rotate(-1deg)' }}>
          <Text className='text-center text-xl font-bold mb-5'>
            Personas vulnerables</Text>
          <View className="ml-2">
            {personasVulnerables.map((item, index) => (
              <Text key={index} className="mb-1 text-lg">
                {'\u2022'} {item} {'\n'}
              </Text>
            ))}
          </View>
        </View>


        <View className='flex-1 bg-fondoSticky3 items-center border-gray-300 border-b-4 
                          border-r-2 shadow-lg rounded-xl p-4 mt-2' style={{ transform: 'scale(0.90) rotate(1.5deg)' }}>
          <Text className='text-center text-xl font-bold mb-5'>
            Mejorar calidad en ambientes cerrados</Text>
          <View className="ml-2">
            {ambientesCerrados.map((item, index) => (
              <Text key={index} className="mb-1 text-lg">
                {'\u2022'} {item} {'\n'}
              </Text>
            ))}
          </View>
        </View>


      </ImageBackground>
    </ScrollView>
  )
}

export default recomendations