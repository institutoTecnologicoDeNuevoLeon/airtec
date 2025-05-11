//cspell:disable 
import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const actividadFisica = [
    "¡Es un día excelente para realizar actividades al aire libre!",

    "¡Es un buen día para realizar actividades al aire libre! \n" +
    "Los alumnos que son excepcionalmente sensibles a la contaminación atmosférica podrían presentar síntomas",

    "Es aceptable realizar actividades al aire libre, en especial actividades breves como el recreo y la educación física.\n" +
    "Para actividades más prolongadas como prácticas deportivas, descansar más a menudo y realizar actividades menos intensas \n" +
    "Prestar atención a la aparición de síntomas y tomar medidas según sea necesario.\n" +
    "Los alumnos asmáticos deben seguir sus planes de acción para el asma y tener a mano medicamentos de acción rápida",

    "Para todas las actividades al aire libre descansar más a menudo y realizar actividades menos intensas.\n" +
    "Tener en cuenta la posibilidad de realizar las actividades más prolongadas o más intensas adentro o reprogramarlas a otro día o a otra hora.\n" +
    "Prestar atención a la aparición de síntomas y tomar medidas según sea necesario\n" +
    "Los alumnos asmáticos deben seguir sus planes de acción para el asma y tener a mano medicamentos de acción rápida",

    "Trasladar todas las actividades adentro o reprogramarlas a otro día."
]

const coloresDeFondo = [
    'bg-green-200',
    'bg-yellow-200',
    'bg-orange-200',
    'bg-red-200',
    'bg-purple-200',
];


const actAireLibre = () => {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 15 }}>
            <Text className='text-center text-xl font-bold mb-5'>
                ¿Actividad física al aire libre?
            </Text>
            {actividadFisica.map((item, index) => (
                <View
                    key={index}
                    className={`w-[90%] ${coloresDeFondo[index]} items-center border-gray-300 border-b-4 
                border-r-2 shadow-lg rounded-xl p-4 mb-5`}
                    style={{ transform: [{ scale: 0.90 }, { rotate: `${(index % 2 === 0 ? .5 : -.5) * (index + 1)}deg` }] }}
                >
                    <Text className='text-lg text-justify whitespace-pre-line'>
                        {item}
                    </Text>
                </View>
            ))}



        </ScrollView>
    )
}

export default actAireLibre
