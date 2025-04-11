//cspell:disable
import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useAirQuality } from "../../../../componentes/useAirQuality";
import AirQualityCard from "../../../../componentes/AirQualityCard";
import DefinirHora from "../../../../componentes/DefinirHora";
import LottieView from "lottie-react-native";

const index = () => {
  const city = "Guadalupe";
  const state = "Nuevo Leon";
  const country = "Mexico";
  let bgColour = "white";

  const { data, loading } = useAirQuality(city, state, country);
  //const vAquiUs = data?.current?.pollution?.aqius;
  const vAquiUs = 250;
  let sAquiUs = "Valor desconocido";

  const iconos = {
    bueno: require("../../../../assets/images/Saludable.png"),
    moderado: require("../../../../assets/images/Moderado.png"),
    peligroso: require("../../../../assets/images/Peligroso.png"),
  };

  let iconAquiUS = "desconocido";

  if (vAquiUs <= 50) {
    sAquiUs = "Bueno";
    bgColour = "#99d98c";
    iconAquiUS = "bueno";
  }
  if (vAquiUs >= 51 && vAquiUs <= 100) {
    sAquiUs = "Moderado";
    bgColour = "#ffee99";
    iconAquiUS = "moderado";
  }
  if (vAquiUs >= 101 && vAquiUs <= 150) {
    sAquiUs = "Dañino para sensibles";
    bgColour = "#ffbf69";
    iconAquiUS = "moderado";
  }
  if (vAquiUs >= 151 && vAquiUs <= 200) {
    sAquiUs = "Malo";
    bgColour = "#f4978e";
    iconAquiUS = "peligroso";
  }
  if (vAquiUs >= 201 && vAquiUs <= 500) {
    sAquiUs = "Peligroso";
    bgColour = "#c8b6ff";
    iconAquiUS = "peligroso";
  }

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Cargando datos</Text>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">
      {/*Ciudad*/}
      <Text className="font-[PTSerif-Bold] text-3xl  mt-10 text-black p-3 tracking-extra">
        Guadalupe
      </Text>

      {/*Hora*/}
      <Text className="mt-3 text-sm">
        <DefinirHora />
      </Text>

      {/*Datos*/}
      <View
        className="flex-row items-center  w-[90%] h-60 rounded-3xl mt-3 shadow-md shadow-black"
        style={{ backgroundColor: bgColour }}
      >
        <Image source={iconos[iconAquiUS]} className="w-20 h-20 ml-10" />
        <View className="flex-1 items-center">
          <Text className="font-[PTSerif-Bold] text-2xl tracking-minExtra">
            Calidad: {sAquiUs}
          </Text>
          <Text className="font-[PTSerif-Bold] text-2xl tracking-minExtra">
            Valor AQI US: {vAquiUs}
          </Text>
        </View>
      </View>

      <View>{/*{data && <AirQualityCard data={data} />}*/}</View>
      <View>
        <Image
          source={require("../../../../assets/images/CalidadAire.jpeg")}
          style={{ width: 350, height: 160, borderRadius: 20, marginTop: 10 }}
        />
      </View>
    </View>
  );
};

export default index;
