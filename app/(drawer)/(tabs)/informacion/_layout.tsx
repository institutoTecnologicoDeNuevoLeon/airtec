//cspell:disable 
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerBackTitle: 'Regresar',
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name="AqiUsScreen" options={{
                headerTitle: 'Indice AQI(US)',
                headerBackTitle: 'Regresar',

            }} />
            <Stack.Screen name="index" options={{
                headerTitle: 'Más información',
                headerBackTitle: 'Regresar',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'PTSerif-Bold',
                    fontSize: 24
                }
            }} />

            <Stack.Screen name="AqiPm25Screen" options={{
                headerTitle: 'PM2.5 a AQI(US)',
                headerBackTitle: 'Regresar',
            }} />

            <Stack.Screen name="AqiPm10Screen" options={{
                headerTitle: 'PM10 a AQI(US)',
                headerBackTitle: 'Regresar',
            }} />

            <Stack.Screen name="AqiSo2Screen" options={{
                headerTitle: 'SO2 a AQI(US)',
                headerBackTitle: 'Regresar',
            }} />

            <Stack.Screen name="AqiNo2Screen" options={{
                headerTitle: 'NO2 a AQI(US)',
                headerBackTitle: 'Regresar',
            }} />

            <Stack.Screen name="AqiO3Screen" options={{
                headerTitle: 'O3 a AQI(US)',
                headerBackTitle: 'Regresar',
            }} />

            <Stack.Screen name="AqiCoScreen" options={{
                headerTitle: 'CO a AQI(US)',
                headerBackTitle: 'Regresar',
            }} />
            
            <Stack.Screen name="recomendations" options={{
                headerTitle: 'Recomendaciones',
                headerBackTitle: 'Regresar',
            }} />

            <Stack.Screen name="actAireLibre" options={{
                headerTitle: 'Ejercicio',
                headerBackTitle: 'Regresar',
            }} />

        </Stack>
    );
}
