//cspell:disable 
import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomerDrawerLayout from '../../componentes/CustomDrawerLayout/CustomerDrawerLayout';


const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer drawerContent={CustomerDrawerLayout}>
                <Drawer.Screen
                    name="(tabs)" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Inicio',
                        title: 'AirTec',
                        headerTitleAlign: 'center',
                        drawerItemStyle: { display: 'none' },
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name='leaf-outline'></Ionicons>
                        )
                    }}
                />
                <Drawer.Screen
                    name="acerca/index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Acerca',
                        title: 'overview',
                        drawerActiveTintColor: '#000',
                        drawerActiveBackgroundColor: '#5363df',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name='information-outline'></Ionicons>
                        )
                    }}
                />

                <Drawer.Screen
                    name="contacto/index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Contacto',
                        title: 'overview',
                        drawerActiveTintColor: '#000',
                        drawerActiveBackgroundColor: '#5363df',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name='call-outline'></Ionicons>
                        )
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default DrawerLayout