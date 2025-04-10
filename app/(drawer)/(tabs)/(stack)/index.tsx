//cspell:disable
import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useAirQuality } from "../../../../componentes/useAirQuality";
import AirQualityCard from "../../../../componentes/AirQualityCard";

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
    <View style={{ alignItems: 'center', marginTop: 15 }} >
      <Text>Calidad del aire en {city}</Text>
      <View style={{ alignItems: 'center', marginTop: 200 }}>
        {data && <AirQualityCard data={data} />}
      </View>

    </View>
  );
};

export default index;

