//cspell:disable
import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";



export default function IndexScreen() {
  return (
    <ScrollView>
      <View className="mt-5">
        <View className="items-center mb-1">
          <Pressable
            className="p-3 px-5 rounded-2xl bg-fondo6 border-2 border-fondo7 elevation-2xl"
            onPress={() => router.push("/informacion/AqiUsScreen")}
          >
            <Text className="text-3xl font-[PTSerif-Bold] text-white tracking-extra">Valores AQI(US)</Text>
          </Pressable>
        </View>
{/* --------------------------------------------------------------------------------------- */}
{/* --------------------------------------------------------------------------------------- */}
{/* --------------------------------------------------------------------------------------- */}
{/* --------------------------------------------------------------------------------------- */}


        <View className="flex-row items-center justify-center my-5">

          <View className="flex-1 items-center">
            <Pressable onPress={() => router.push("/informacion/AqiPm25Screen")}
              className="p-3 px-5 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl">
              <Text className="text-xl font-[PTSerif-Bold] text-white tracking-extra">
                PM2.5
              </Text>
            </Pressable>
          </View>

          <View className="flex-1 items-center">
            <Pressable onPress={() => router.push("/informacion/AqiPm10Screen")}
              className="p-3 px-5 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl">
              <Text className="text-xl font-[PTSerif-Bold] text-white tracking-extra">
                PM10
              </Text>
            </Pressable>

          </View>

          <View className="flex-1 items-center">
            <Pressable onPress={() => router.push("/informacion/AqiSo2Screen")}
              className="p-3 px-8 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl">
              <Text className="text-xl font-[PTSerif-Bold] text-white tracking-extra">
                SO₂
              </Text>
            </Pressable>

          </View>
        </View>

        <View className="flex-row items-center justify-center">

          <View className="flex-1 items-center">
            <Pressable onPress={() => router.push("/informacion/AqiNo2Screen")}
              className="p-3 px-8 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl">
              <Text className="text-xl font-[PTSerif-Bold] text-white tracking-extra">
                NO2
              </Text>
            </Pressable>
          </View>

          <View className="flex-1 items-center">
            <Pressable onPress={() => router.push("/informacion/AqiO3Screen")}
              className="p-3 px-9 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl">
              <Text className="text-xl font-[PTSerif-Bold] text-white tracking-extra">
                O3
              </Text>
            </Pressable>

          </View>

          <View className="flex-1 items-center">
            <Pressable onPress={() => router.push("/informacion/AqiCoScreen")}
              className="p-3 px-9 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl">
              <Text className="text-xl font-[PTSerif-Bold] text-white tracking-extra">
                CO
              </Text>
            </Pressable>

          </View>
        </View>
        
      </View>
    </ScrollView>
  );
}

// 👇 Esto configura el encabezado para esta pantalla
IndexScreen.options = {
  headerTitle: "Más Información",
};
