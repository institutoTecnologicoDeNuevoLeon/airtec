//cspell:disable
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useAirQuality } from "../../../../componentes/useAirQuality";
import DefinirHora from "../../../../componentes/DefinirHora";
import Weathercard from "../../../../componentes/cardsInformation/Weathercard";
import AirQualityCard from "../../../../componentes/cardsInformation/AirQualityCard";
import { ciudadesEstados } from "../../../../aqiTool/localidadesMexico";

const Index = () => {
  const [state, setState] = useState("Nuevo Leon");
  const [city, setCity] = useState("Guadalupe");
  const [shouldFetch, setShouldFetch] = useState(true); // primera carga

  const { data, loading } = useAirQuality(city, state, "Mexico", shouldFetch);

  // Resetea el trigger después de cargar
  useEffect(() => {
    if (!loading && shouldFetch) {
      setShouldFetch(false);
    }
  }, [loading, shouldFetch]);

  const ciudadesDisponibles = ciudadesEstados[state] || [];

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
    bueno: require("../../../../assets/images/iconosPersonas/Saludable.png"),
    moderado: require("../../../../assets/images/iconosPersonas/Moderado.png"),
    peligroso: require("../../../../assets/images/iconosPersonas/Peligroso.png"),
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

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1,}}>
      <ImageBackground
        source={require('../../../../assets/images/fondos/fondo1.jpg')}
        className="flex-1 justify-center items-center"
      >
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.85)',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0
        }} />

        {/* Dropdowns */}
        <View className="w-[90%] bg-white p-4 mt-4 rounded-2xl shadow-md">
          <Text className="text-lg font-semibold mb-2">Selecciona el estado</Text>
          <Picker
            selectedValue={state}
            onValueChange={(value) => {
              setState(value);
              setCity(ciudadesEstados[value][0]);
            }}
          >
            {Object.keys(ciudadesEstados).map((estado) => (
              <Picker.Item label={estado} value={estado} key={estado} />
            ))}
          </Picker>

          <Text className="text-lg font-semibold mt-4 mb-2">Selecciona la ciudad</Text>
          <Picker
            selectedValue={city}
            onValueChange={(value) => setCity(value)}
          >
            {ciudadesDisponibles.map((ciudad) => (
              <Picker.Item label={ciudad} value={ciudad} key={ciudad} />
            ))}
          </Picker>
        </View>

        <Text className="font-[PTSerif-Bold] text-4xl color-letras p-2 tracking-extra mt-5">
          {city}
        </Text>

        <Text className="text-sm">
          <DefinirHora />
        </Text>

        <Pressable
          className="px-5 py-3 rounded-3xl bg-fondo2 m-3 shadow-lg border-2 border-fondo7"
          onPress={() => setShouldFetch(true)}
        >
          <Text className="text-2xl color-white font-[PTSerif-Regular]">Actualizar datos</Text>
        </Pressable>

        {loading ? (
          <View className="flex-1 justify-center items-center">
            <Text>Cargando datos...</Text>
            <ActivityIndicator size="large" />
          </View>
        ) : data ? (
          <>
            <AirQualityCard
              bgColour={bgColour}
              iconos={iconos}
              iconAquiUS={iconAquiUS}
              sAquiUs={sAquiUs}
              vAquiUs={vAquiUs}
            />
            <View className="w-[90%] h-30 rounded-3xl mt-3 shadow-black shadow-md bg-white">
              <Weathercard
                temperatura={temperatura}
                humedad={humedad}
                hora={hora}
                viento={vientoR}
              />
            </View>
          </>
        ) : (
          <Text className="text-lg">No hay datos aún</Text>
        )}
      </ImageBackground>
    </ScrollView>
  );
};

export default Index;
