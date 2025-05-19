//cspell:disable
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import * as Haptics from "expo-haptics";
import { Pressable, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontFamily: 'PTSerif-Bold',
          fontSize: 24,
        }
      }}>
        
      <Tabs.Screen
        name="(stack)/index"
        options={{
          title: 'Inicio',
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

      {/* Se estaba intentando hacer una pantalla de consulta por país, estado y ciudad, se puede mejorar */}
      <Tabs.Screen name="buscar"
        options={{
          tabBarItemStyle: { display: "none" }
        }}
      />

      <Tabs.Screen name="aqi_in/index"
        options={{
          headerShown: true,
          title: "Calidad del Aire (aqi.in)",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="leaf" color={color} />
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

      <Tabs.Screen name="calculadora/index"
        options={{
          title: "Calculadora",
          headerTitleStyle: {
            fontFamily: 'PTSerif-Bold',
            fontSize: 23,
          },
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

      <Tabs.Screen name="informacion"
        options={{
          headerShown: false,
          title: "Más información",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="info" color={color} />
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
          }, }} />

    </Tabs>
  );
}
