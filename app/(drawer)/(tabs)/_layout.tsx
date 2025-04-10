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
          title: "Inicio",
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
    </Tabs>
  );
}
