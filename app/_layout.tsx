//cspell:disable
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import "../global";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "PTSerif-Regular": require("../assets/fonts/PTSerif-Regular.ttf"),
    "PTSerif-Bold": require("../assets/fonts/PTSerif-Bold.ttf"),
    "PTSerif-BoldItalic": require("../assets/fonts/PTSerif-BoldItalic.ttf"),
    "PTSerif-Italic": require("../assets/fonts/PTSerif-Italic.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <ImageBackground
        className="flex-1 justify-center items-center bg-fondo1"
        source={require("../assets/images/fondos/ghibiTec.png")}
        imageStyle={{ opacity: 0.8 }}
      >
        <LottieView
          source={require("../assets/iconos-Animados/Animation - 1744182723823.json")}
          autoPlay
          loop
          resizeMode="cover"
          style={{ width: 120, height: 120 }}
        />
        <View className="items-center p-2 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
        
        <Text className="font-[PTSerif-BoldItalic] mt-1 text-3xl">AirTec</Text>
        <Text className="font-[PTSerif-BoldItalic] mt-1 text-xl">
          Institulo Tecnológico de Nuevo León
        </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default _layout;
