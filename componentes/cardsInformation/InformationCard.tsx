//cspell:disable
import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
import { ScrollView } from 'react-native-gesture-handler';


const InformationCard = () => {
    return (
        <ScrollView>
            {/* logo y nombre de la aplicacion */}
            <View className='flex-row pb-10'>
                <View className='w-1/2 items-end pt-3'>
                    <Text className='text-2xl font-[PTSerif-BoldItalic]'>AirTec</Text>
                </View>
                <View className='w-1/2 pl-3'>
                    <Image source={require('../../assets/images/iconosClima/aire-limpio.png')}
                    style = {{width:40 , height:40}}/>
                </View>
            </View>
            

            <View className='justify-center w-{80%} items-center px-10'>
                <Text className='text-base text-justify '>
                    <Text className='font-[PTSerif-BoldItalic]'>AirTec</Text> es una aplicación móvil desarrollada como parte 
                    de un proyecto de Residencia Profesional para el uso del Instituto Tecnológico de Nuevo León 
                </Text>
                <View className="h-4" />
                <Text className='text-base text-justify'>
                    Su propósito es ofrecer una herramienta intuitiva y accesible
                    para el monitoreo en tiempo real de la calidad del aire en diversas
                    ciudades del estado de Nuevo León y otras ciudades alrededor del mundo, utilizando los datos proporcionados
                    por la API de IQAir.
                </Text>
                <View className="h-4" />
                <Text className='text-base text-justify'>
                    Dirigida a estudiantes y docentes, <Text className='font-[PTSerif-BoldItalic]'>AirTec </Text> 
                     busca promover la conciencia ambiental y facilitar el acceso a información confiable sobre el entorno,
                    incentivando decisiones informadas y una vida más saludable dentro de
                    los espacios académicos.
                </Text>
            </View>

            {/* contenido y detalles */}
            <View className='flex-1 pt-8'>
                <View className='items-center '>
                    <Ionicons className='' name='heart-circle-outline' size={48} color={'#fb6376'} />
                </View>
            </View>
            
        </ScrollView>
    )
}
export default InformationCard
