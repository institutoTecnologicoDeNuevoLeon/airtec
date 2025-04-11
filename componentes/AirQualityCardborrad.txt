//cspell:disable
import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  data: any;
}

const getWeatherIcon = (iconCode: string) => {
  if (iconCode === "01n" || iconCode === "01d") {
    return <Icon name="cloud" size={30} color="black" />;
  }
  // Puedes agregar más iconos según los códigos
  return null;
};

const AirQualityCard = ({ data }: Props) => {
  return (
    <View>

      <View>{getWeatherIcon(data.current.weather.ic)}</View>
      <Text>Estado: {data.state}</Text>
      <Text>País: {data.country}</Text>
      <Text>Calidad del aire (AQI US): {data.current.pollution.aqius}</Text>
      <Text>Temperatura: {data.current.weather.tp}°C</Text>
      <Text>Humedad: {data.current.weather.hu}%</Text>
      <Text>Presión: {data.current.weather.pr} hPa</Text>

    </View>
  );
};

export default AirQualityCard;
