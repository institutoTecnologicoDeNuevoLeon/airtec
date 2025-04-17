//cspell:disable 
import { Stack } from 'expo-router';
import { Button } from 'react-native';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerBackTitle: 'Regresar',
            }}
        >
            <Stack.Screen name="AqiUsScreen" options={{
                headerTitle: 'Indice AQI(US)',
                headerBackTitle: 'Regresar',

            }} />
            <Stack.Screen name="index" options={{
                headerTitle: 'Más información',
                headerBackTitle: 'Regresar',
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

        </Stack>
    );
}
