//cspell:disable
import { View, Text, Touchable, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomerDrawerLayout from "../../componentes/CustomDrawerLayout/CustomerDrawerLayout";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomerDrawerLayout}
        screenOptions={{
          drawerActiveBackgroundColor: "#dee2e6",
          drawerActiveTintColor: '#023e8a',
          headerTitleAlign: 'center',
          headerTintColor: "#e7ecef",

          headerStyle: {
            backgroundColor: "#2a6f97",

          },

          drawerStyle: {
            backgroundColor: '#adb5bd'
          },

          headerTitleStyle: {
            fontFamily: "PTSerif-BoldItalic",
            fontSize: 25,
            letterSpacing: 8,
          },

          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Pressable
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                style={{ marginLeft: 20, paddingHorizontal: 5 }}>
                {/* <Image 
                                    source={require('../../assets/images/menu-de-hamburguesas.png')}
                                    style={{width:30, height:30 }}
                                    /> */}
                <Ionicons name="grid" size={24} color={"#e7ecef"}></Ionicons>
              </Pressable>
            );
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)" 
          options={{
            drawerLabel: "Inicio",
            title: "AirTec",
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons name="home" size={20} style={{ paddingLeft: 2 }} color={focused ? '#023e8a' : '#0096c7'}></Ionicons>
            ),
          }}
        />
        <Drawer.Screen
          name="acerca/index" 
          options={{
            drawerLabel: "Acerca",
            title: "Acerca",
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons name="information-circle-outline" size={24} color={focused ? '#023e8a' : '#0096c7'}></Ionicons>
            ),
          }}
        />
        <Drawer.Screen
          name="contacto/index" 
          options={{
            drawerLabel: "Ayuda",
            title: "Ayuda",
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons name="call" size={20} style={{ paddingLeft: 2 }} color={focused ? '#023e8a' : '#0096c7'}></Ionicons>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
