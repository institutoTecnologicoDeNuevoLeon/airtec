//cspell:disable 
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, usePathname, Stack } from 'expo-router'
 

const index = () => {
  return (
    <View className='mt-10'>
      <View className='items-center mb-1'>
        <Pressable 
            className='w-11/12 py-16 bg-slate-300 rounded-lg items-center'
          onPress={() => router.push('/informacion/AqiUsScreen')}>
          <Text>Valores AQI(US)</Text>
        </Pressable>
      </View>


      <View className='flex-row  w-full'>

        <View className='w-1/2 items-center'>
          <Pressable className='py-16 px-20 ml-4 bg-slate-300 rounded-lg'>
            <Text>Valores AQI(US)</Text>
          </Pressable>
        </View>
        <View className='w-1/2 items-center'>
          <Pressable className='py-16 px-20 mr-4 bg-slate-300 rounded-lg'>
            <Text>Valores AQI(US)</Text>
          </Pressable>
        </View>

      </View>
    </View>
  )
}

export default index