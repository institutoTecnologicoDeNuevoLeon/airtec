//cspell:disable 
import { View, Text } from 'react-native'
import React from 'react'
import { contaminantes } from "../../../../aqiTool/elementosAqi"
import { ScrollView } from 'react-native-gesture-handler'

const AqiCoScreen = () => {
  const nivelesCO = contaminantes['CO']

  return (
    <ScrollView>
      <View className="m-4 space-y-4">
        {nivelesCO.map((nivel, index) => (
          <View
            key={index}
            className="p-4 rounded-xl items-center justify-center border-2 border-gray-700 elevation-lg mb-2"
            style={{ backgroundColor: nivel.color2 }}
          >
            <Text
              className="text-black font-[PTSerif-BoldItalic] text-2xl border-b-2">
              {nivel.label}
            </Text>

            <Text className="text-black font-[PTSerif-Bold] text-lg">
              Rango:
              <Text className='font-[PTSerif-Regular]'> {nivel.min} min - {nivel.max} max
              </Text>
            </Text>

            <Text className="text-black font-[PTSerif-Bold] text-lg">
              AQI:
              <Text className='font-[PTSerif-Regular]'> {nivel.aqi}</Text>
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default AqiCoScreen