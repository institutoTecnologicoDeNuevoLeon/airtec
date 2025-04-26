// cspell:disable
import { View, Text } from "react-native";
import React from "react";
import { contaminantes } from "../../../../aqiTool/elementosAqi";
import { ScrollView } from "react-native-gesture-handler";

const AqiPm25Screen = () => {
  const nivelesCO = contaminantes['CO'];

  return (
    <ScrollView>
      <View className="m-4 space-y-4">
        {nivelesCO.map((nivel, index) => (
          <View
            key={index}
            className=" flex-row p-4 rounded-xl items-center justify-start border-4 border-fondo5 elevation-lg mb-2 bg-fondo8"
          >
            <View
              className="flex-1/4 w-8 h-8 rounded-full mr-5 border-2"
              style={{ backgroundColor: nivel.color2 }}
            />

            <View className="flex-3/4">
              <Text className="text-black font-[PTSerif-Bold] text-xl">
                {nivel.label}
              </Text>

              <Text className="text-black font-[PTSerif-Bold] text-lg">
                Rango:
                <Text className="font-[PTSerif-Regular]">
                  {" "}
                  {nivel.min} min - {nivel.max} max
                </Text>
              </Text>

              <Text className="text-black font-[PTSerif-Bold] text-lg">
                AQI:
                <Text className="font-[PTSerif-Regular]"> {nivel.aqi}</Text>
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AqiPm25Screen;