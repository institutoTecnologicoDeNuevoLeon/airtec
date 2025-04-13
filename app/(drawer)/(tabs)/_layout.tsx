//cspell:disable
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import * as Haptics from "expo-haptics";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="(stack)/index"
        options={{
          headerShown: false,
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
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
          headerShown: false,
          title: "Buscar",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="skyatlas" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
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
          headerShown: false,
          title: "Calculadora",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calculator" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
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
        name="informacion/index"
        options={{
          headerShown: false,
          title: "Más información",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="info" color={color} />
          ),
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
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
    </Tabs>
  );
}
