import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
              <Drawer.Screen
                  name="tabs" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Home',
                      title: 'overview',
                  }}
              />
              <Drawer.Screen
                  name="acerca" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'User',
                      title: 'overview',
                  }}
              />

              <Drawer.Screen
                  name="contacto" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'User',
                      title: 'overview',
                  }}
              />
          </Drawer>
      </GestureHandlerRootView>
  )
}

export default DrawerLayout