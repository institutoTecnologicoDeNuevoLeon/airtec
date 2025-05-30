//cspell:disable
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import "../global";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { Appearance } from "react-native";

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "PTSerif-Regular": require("../assets/fonts/PTSerif-Regular.ttf"),
    "PTSerif-Bold": require("../assets/fonts/PTSerif-Bold.ttf"),
    "PTSerif-BoldItalic": require("../assets/fonts/PTSerif-BoldItalic.ttf"),
    "PTSerif-Italic": require("../assets/fonts/PTSerif-Italic.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);

  // Este useEffect fuerza el tema claro al iniciar
  useEffect(() => {
    if (Appearance.getColorScheme() === "dark") {
      console.log("Modo oscuro detectado, puedes adaptar estilos si lo deseas");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <ImageBackground
        className="flex-1 justify-center items-center"
        source={require("../assets/images/fondos/ghibiTec.png")}
        imageStyle={{ opacity: 0.8 }}
        style={{ backgroundColor: "#ffffff" }} // Forzar fondo blanco
      >
        <LottieView
          source={require("../assets/iconos-Animados/Animation - 1744182723823.json")}
          autoPlay
          loop
          resizeMode="cover"
          style={{ width: 120, height: 120 }}
        />
        <View
          className="items-center justify-center p-2 rounded-2xl w-60 h-24"
          style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
        >
          <Text className="font-[PTSerif-BoldItalic] mt-1 text-3xl mx-4"> AirTec </Text>
          <Text className="font-[PTSerif-BoldItalic] mt-1 text-base mx-4"> TECNL </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default _layout;

