//cspell:disable
import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useAirQuality } from "../../../../componentes/useAirQuality";
import AirQualityCard from "../../../../componentes/AirQualityCard";
import DefinirHora from "../../../../componentes/DefinirHora";

const index = () => {

  const city = 'Guadalupe';
  const state = 'Nuevo Leon'
  const country = 'Mexico';

  const { data, loading } = useAirQuality(city, state, country);

  if (loading) {
    return (
      <View>
        <Text>Cargando datos</Text>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }



  return (
    <View className="flex-1 items-center justify-center" >

      <Text
        className=
        "font-[PTSerif-Bold] text-3xl  mt-5 text-black p-3 bg-tercero rounded-lg">
        Guadalupe
      </Text>
      <Text className="mt-3 text-sm">
        <DefinirHora />
      </Text>

      <View className="w-[90%] h-80 rounded-3xl bg-primary mt-3">
        {data && <AirQualityCard data={data} />}

      </View>

      <View style={{ alignItems: 'center', marginTop: 200 }}>
        {/*{data && <AirQualityCard data={data} />}*/}
      </View>

    </View>
  );
};

export default index;

