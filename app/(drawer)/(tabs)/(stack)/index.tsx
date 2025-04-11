//cspell:disable
// app/tabs/index.tsx
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useAirQuality } from "../../../../componentes/useAirQuality";
import DefinirHora from "../../../../componentes/DefinirHora";
import Weathercard from "../../../../componentes/Weathercard";
import AirQualityCard from "../../../../componentes/AirQualityCard";

const index = () => {
  const city = "Guadalupe";
  const state = "Nuevo Leon";
  const country = "Mexico";

  const { data, loading } = useAirQuality(city, state, country);
  const vAquiUs = data?.current?.pollution?.aqius;
  const temperatura = data?.current?.weather.tp;
  const hora = data?.current?.weather.ts;
  const viento = (data?.current?.weather.ws || 0) * 3.6;
  const vientoR = viento.toFixed(1);
  const humedad = data?.current?.weather.hu;

  let sAquiUs = "Valor desconocido";
  let bgColour = "white";
  let iconAquiUS = "desconocido";

  const iconos = {
    bueno: require("../../../../assets/images/Saludable.png"),
    moderado: require("../../../../assets/images/Moderado.png"),
    peligroso: require("../../../../assets/images/Peligroso.png"),
  };

  if (vAquiUs <= 50) {
    sAquiUs = "Bueno";
    bgColour = "#99d98c";
    iconAquiUS = "bueno";
  } else if (vAquiUs <= 100) {
    sAquiUs = "Moderado";
    bgColour = "#ffee99";
    iconAquiUS = "moderado";
  } else if (vAquiUs <= 150) {
    sAquiUs = "Dañino para sensibles";
    bgColour = "#ffbf69";
    iconAquiUS = "moderado";
  } else if (vAquiUs <= 200) {
    sAquiUs = "Malo";
    bgColour = "#f4978e";
    iconAquiUS = "peligroso";
  } else if (vAquiUs <= 500) {
    sAquiUs = "Peligroso";
    bgColour = "#c8b6ff";
    iconAquiUS = "peligroso";
  }

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Cargando datos...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", marginTop: 50 }}>

      <Text className="font-[PTSerif-Bold] text-3xl text-black p-2 tracking-extra">
        Guadalupe
      </Text>

      <Text className="text-sm">
        <DefinirHora />
      </Text>

      <AirQualityCard
        bgColour={bgColour}
        iconos={iconos}
        iconAquiUS={iconAquiUS}
        sAquiUs={sAquiUs}
        vAquiUs={vAquiUs}
      />

      <View className="w-[90%] h-20 rounded-3xl mt-3 shadow-black shadow-md bg-white">
        <Weathercard
          temperatura={temperatura}
          humedad={humedad}
          hora={hora}
          viento={vientoR}
        />
      </View>
    </ScrollView>
  );
};

export default index;
