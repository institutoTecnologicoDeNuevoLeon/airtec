//cspell:disable
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import * as Haptics from "expo-haptics";
import { Pressable, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="(stack)/index"
        options={{
          headerShown: true,
          title: 'Inicio',
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <Pressable
                android_ripple={{ color: '#6c757d', borderless: true }}
                {...props}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  (props.onPress as any)();
                }}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="buscar/index"
        options={{
          headerShown: true,
          title: "Buscar",
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="skyatlas" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <Pressable
                android_ripple={{ color: '#6c757d', borderless: true }}
                {...props}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  (props.onPress as any)();
                }}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="calculadora/index"
        options={{
          headerShown: true,
          title: "Calculadora",
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calculator" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <Pressable
                android_ripple={{ color: '#6c757d', borderless: true }}
                {...props}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  (props.onPress as any)();
                }}
              />
            );
          },
        }} />

      <Tabs.Screen
        name="informacion"
        options={{
          headerShown: true,
          title: "Más información",
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <Pressable
                {...props}
                android_ripple={{ color: '#6c757d', borderless: true }}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  (props.onPress as any)();
                }}
              />
            );
          },
        }} />




    </Tabs>
  );
}
