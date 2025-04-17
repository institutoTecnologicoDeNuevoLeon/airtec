//cspell:disable
import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function IndexScreen() {
  return (
    <ScrollView>
      <View className="mt-5">
        <View className="items-center mb-1">
          <Pressable
            className="w-11/12 py-16 bg-slate-300 rounded-lg items-center"
            onPress={() => router.push("/informacion/AqiUsScreen")}
          >
            <Text className="text-3xl font-[PTSerif-Bold">Valores AQI(US)</Text>
          </Pressable>
        </View>

        <View style={{ width: "100%" }}>
          <View className="flex-row p-5 pt-1">
            {/* Izquierda: PM2.5 */}
            <View className="flex-1 items-center bg-tercero justify-center h-32 rounded-lg">
              <Pressable>
                <Text
                  className="text-xl font-[PTSerif-Bold]"
                  onPress={() => router.push("/informacion/AqiPm25Screen")}
                >
                  AQIUS con PM2.5
                </Text>
              </Pressable>
            </View>

            {/* Separador blanco de 8px */}
            <View style={{ width: 8, backgroundColor: "white" }} />

            {/* Derecha: PM10 */}
            <View className="flex-1 items-center bg-primary justify-center h-32 rounded-lg">
              <Pressable
                onPress={() => router.push("/informacion/AqiPm10Screen")}
              >
                <Text className="text-xl font-[PTSerif-Bold]">
                  AQIUS con PM10
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <View className="flex-row p-5 pt-1">
            {/* Izquierda: PM2.5 */}
            <View className="flex-1 items-center bg-primary justify-center h-32 rounded-lg">
              <Pressable
                onPress={() => router.push("/informacion/AqiSo2Screen")}
              >
                <Text className="text-xl font-[PTSerif-Bold]">
                  AQIUS con SO₂
                </Text>
              </Pressable>
            </View>

            {/* Separador blanco de 8px */}
            <View style={{ width: 8, backgroundColor: "white" }} />

            {/* Derecha: NO2 */}
            <View className="flex-1 items-center bg-tercero justify-center h-32 rounded-lg">
              <Pressable
                onPress={() => router.push("/informacion/AqiNo2Screen")}
              >
                <Text className="text-xl font-[PTSerif-Bold]">
                  AQIUS con NO₂
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <View className="flex-row p-5 pt-1">
            {/* Izquierda: PM2.5 */}
            <View className="flex-1 items-center bg-tercero justify-center h-32 rounded-lg">
              <Pressable
                onPress={() => router.push("/informacion/AqiO3Screen")}
              >
                <Text className="text-xl font-[PTSerif-Bold]">
                  AQIUS con O₃
                </Text>
              </Pressable>
            </View>

            {/* Separador blanco de 8px */}
            <View style={{ width: 8, backgroundColor: "white" }} />

            {/* Derecha: PM10 */}
            <View className="flex-1 items-center bg-primary justify-center h-32 rounded-lg">
              <Pressable
                onPress={() => router.push("/informacion/AqiCoScreen")}
              >
                <Text className="text-xl font-[PTSerif-Bold]">
                  AQIUS con CO
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View className="items-center mb-1">
          <Pressable
            className="w-11/12 py-16 bg-slate-300 rounded-lg items-center"       >
            <Text className="text-3xl font-[PTSerif-Bold">
              Recomendaciones generales
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

// 👇 Esto configura el encabezado para esta pantalla
IndexScreen.options = {
  headerTitle: "Más Información",
};
