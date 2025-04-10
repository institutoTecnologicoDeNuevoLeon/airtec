//cspell:disable 
import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="(tabs)" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Inicio',
                        title: 'AirTec',
                    }}
                />
                <Drawer.Screen
                    name="acerca/index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Acerca',
                        title: 'overview',
                    }}
                />

                <Drawer.Screen
                    name="contacto/index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Contacto',
                        title: 'overview',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default DrawerLayout