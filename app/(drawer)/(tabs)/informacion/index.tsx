//cspell:disable
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
  Linking,
  Alert,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

export default function IndexScreen() {
  return (
    <ImageBackground
      source={require("../../../../assets/images/fondos/fondo1.jpg")}
      className="flex-1 justify-center items-center"
    >
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <ScrollView>
        <View className="mt-5">
          <View className="items-center mb-1">
            <Pressable
              className="p-3 px-5 rounded-2xl bg-fondo6 border-2 border-fondo7 elevation-2xl"
              onPress={() => router.push("/informacion/AqiUsScreen")}
            >
              <Text className="text-3xl font-[PTSerif-Bold] text-white tracking-extra">
                Valores AQI(US)
              </Text>
            </Pressable>
          </View>
          {/* --------------------------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------------------------- */}

          <View className="flex-row items-center justify-center my-5">
            <View className="flex-1 items-center">
              <Pressable
                onPress={() => router.push("/informacion/AqiPm25Screen")}
                className="p-3 px-5 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl"
              >
                <Text className="text-lg font-[PTSerif-Bold] text-white tracking-extra">
                  PM2.5
                </Text>
              </Pressable>
            </View>

            <View className="flex-1 items-center">
              <Pressable
                onPress={() => router.push("/informacion/AqiPm10Screen")}
                className="p-3 px-5 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl"
              >
                <Text className="text-lg font-[PTSerif-Bold] text-white tracking-extra">
                  PM10
                </Text>
              </Pressable>
            </View>

            <View className="flex-1 items-center">
              <Pressable
                onPress={() => router.push("/informacion/AqiSo2Screen")}
                className="p-3 px-8 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl"
              >
                <Text className="text-lg font-[PTSerif-Bold] text-white tracking-extra">
                  SO₂
                </Text>
              </Pressable>
            </View>
          </View>

          <View className="flex-row items-center justify-center">
            <View className="flex-1 items-center">
              <Pressable
                onPress={() => router.push("/informacion/AqiNo2Screen")}
                className="p-3 px-8 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl"
              >
                <Text className="text-lg font-[PTSerif-Bold] text-white tracking-extra">
                  NO2
                </Text>
              </Pressable>
            </View>

            <View className="flex-1 items-center">
              <Pressable
                onPress={() => router.push("/informacion/AqiO3Screen")}
                className="p-3 px-9 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl"
              >
                <Text className="text-lg font-[PTSerif-Bold] text-white tracking-extra">
                  O3
                </Text>
              </Pressable>
            </View>

            <View className="flex-1 items-center">
              <Pressable
                onPress={() => router.push("/informacion/AqiCoScreen")}
                className="p-3 px-9 rounded-3xl bg-fondo2 border-2 border-fondo7 elevation-2xl"
              >
                <Text className="text-xl font-[PTSerif-Bold] text-white tracking-extra">
                  CO
                </Text>
              </Pressable>
            </View>
          </View>



          <View className="flex-row gap-x-4 my-5">
            <View className="flex-1 h-48 bg-white rounded-3xl items-center justify-center border-l-2">
              <Pressable
                onPress={() => router.push("/informacion/recomendations")}
              >
                <Image
                  className="w-24 h-24 p-4"
                  source={require("../../../../assets/images/iconosGenerales/recomendaciones.png")}
                ></Image>
              </Pressable>
              <Text className="mt-2 font-[PTSerif-Bold] text-base">
                Cuida tu salud
              </Text>
            </View>

            <View className="flex-1 h-48 bg-white rounded-3xl items-center justify-center border-l-2">
              <Pressable onPress={() => router.push("/informacion/actAireLibre")}>
                <Image
                  className="w-24 h-24 p-4"
                  source={require("../../../../assets/images/iconosGenerales/dumbell.png")}/>
              </Pressable>
              <Text className="mt-2 font-[PTSerif-Bold] text-base">
                Ejercicio
              </Text>
            </View>
          </View>


          <View className="flex-row gap-x-4">
            <View className="flex-1 h-48 bg-white rounded-3xl items-center justify-center border-l-2">
              <Pressable
                onPress={() => router.push("/informacion/actAireLibre")}
              >
                <Image
                  className="w-24 h-24 p-4"
                  source={require("../../../../assets/images/iconosGenerales/dumbell.png")}
                ></Image>
              </Pressable>
              <Text className="mt-2 font-[PTSerif-Bold] text-base">
                Ejercicio
              </Text>
            </View>

            <View className="flex-1 h-48 bg-white rounded-3xl items-center justify-center border-l-2">
              <Pressable
                onPress={async () => {
                  const url = "https://www.airnow.gov/aqi/";
                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    Linking.openURL(url);
                  } else {
                    Alert.alert("Error", "No se pudo abrir el enlace.");
                  }
                }}
              >
                <Image
                  className="w-24 h-24 p-4"
                  source={require("../../../../assets/images/iconosGenerales/flecha-correcta.png")}
                ></Image>
              </Pressable>
              <Text className="mt-2 font-[PTSerif-Bold] text-base">
                AQI (AirNow)
              </Text>
            </View>
          </View>


        </View>
      </ScrollView>
    </ImageBackground>
  );
}

// 👇 Esto configura el encabezado para esta pantalla
IndexScreen.options = {
  headerTitle: "Más Información",
};
