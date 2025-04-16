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

        </Stack>
    );
}
