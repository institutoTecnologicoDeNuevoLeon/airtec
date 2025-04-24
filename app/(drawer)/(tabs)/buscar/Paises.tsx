//cspell:disable 
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { countries } from '../../../../aqiTool/countries'

const Paises = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View className="p-4 border-b border-gray-200">
            <Text className="text-lg">{index + 1}. {item.country}</Text>
          </View>
        )}
      />

    </SafeAreaView>
  )
}

export default Paises