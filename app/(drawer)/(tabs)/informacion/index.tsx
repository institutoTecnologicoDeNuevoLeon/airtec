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
            {/* Tarjeta 1 */}
            <View className="flex-1 h-48 bg-fondo7-70 rounded-3xl border-2 px-3 py-3 justify-between">
              <Text className="font-[PTSerif-Bold] text-xl text-center text-black tracking-extra">
                Cuida tu salud
              </Text>
              <Pressable onPress={() => router.push("/informacion/recomendations")} className="items-center">
                <Image
                  className="w-24 h-24"
                  source={require("../../../../assets/images/iconosGenerales/recomendaciones.png")}
                />
              </Pressable>
            </View>

            {/* Tarjeta 2 */}
            <View className="flex-1 h-48 bg-fondo7-70 rounded-3xl border-2 px-3 py-3 justify-between">
              <Text className="font-[PTSerif-Bold] text-xl text-center text-black tracking-extra">
                Ejercicio
              </Text>
              <Pressable onPress={() => router.push("/informacion/actAireLibre")} className="items-center">
                <Image
                  className="w-24 h-24"
                  source={require("../../../../assets/images/iconosGenerales/dumbell.png")}
                />
              </Pressable>
            </View>
          </View>


          <View className="justify-center items-center p-2 bg-white rounded-lg">
            <Text className="font-bold text-lg">¡Revisa nuestras paginas oficiales!</Text>
          </View>

          <View className="flex-row gap-x-4">
            <View className="flex-1 h-48 items-center justify-center">
              <Pressable
                onPress={async () => {
                  const url = "https://www.facebook.com/institutotecnologicodenuevoleon/?locale=es_LA";
                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    Linking.openURL(url);
                  } else {
                    Alert.alert("Error", "No se pudo abrir el enlace.");
                  }
                }}
              >
                <Image
                  className="w-20 h-20 p-4"
                  source={require("../../../../assets/images/iconosGenerales/facebook.png")}
                ></Image>
              </Pressable>
            </View>

            <View className="flex-1 h-48 items-center justify-center">
              <Pressable
                onPress={async () => {
                  const url = "http://nuevoleon.tecnm.mx/";;
                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    Linking.openURL(url);
                  } else {
                    Alert.alert("Error", "No se pudo abrir el enlace.");
                  }
                }}
              >
                <Image
                  className="w-20 h-20 p-4 rounded-full"
                  source={require("../../../../assets/images/itnl/acercaDe.png")}
                ></Image>
              </Pressable>
            </View>
          </View>


          <View className="justify-center items-center p-2 bg-white rounded-lg">
            <Text className="font-bold text-lg">Paginas del gobierno de Nuevo León</Text>
          </View>

          <View className="flex-row gap-x-4">
            <View className="flex-1 h-32 items-center justify-center">
              <Pressable
                onPress={async () => {
                  const url = "https://aire.nl.gob.mx/";
                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    Linking.openURL(url);
                  } else {
                    Alert.alert("Error", "No se pudo abrir el enlace.");
                  }
                }}
              >
                <Image
                  className="w-16 h-16"
                  source={require("../../../../assets/images/iconosGenerales/enlace.png")}
                ></Image>
              </Pressable>
            </View>

            <View className="flex-1 h-32 items-center justify-center">
              <Pressable
                onPress={async () => {
                  const url = "https://www.gob.mx/inecc";
                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    Linking.openURL(url);
                  } else {
                    Alert.alert("Error", "No se pudo abrir el enlace.");
                  }
                }}
              >
                <Image
                  className="w-16 h-16"
                  source={require("../../../../assets/images/iconosGenerales/enlace-externo.png")}
                ></Image>
              </Pressable>
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
