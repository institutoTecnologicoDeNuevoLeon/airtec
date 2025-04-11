//cspell:disable
// componentes/AirQualityCard.tsx
import { View, Text, Image } from "react-native";
import React from "react";

const AirQualityCard = ({ bgColour, iconos, iconAquiUS, sAquiUs, vAquiUs }) => {
    return (
        <View
            className="flex-row items-center w-[90%] h-60 rounded-3xl mt-3 shadow-md shadow-black"
            style={{ backgroundColor: bgColour }}
        >
            <Image
                source={iconos[iconAquiUS]}
                className="w-20 h-20 ml-10"
                resizeMode="contain"
            />

            <View className="flex-1 items-center">
                <Text className="font-[PTSerif-Bold] text-2xl tracking-minExtra">
                    Calidad: {sAquiUs}
                </Text>
                <Text className="font-[PTSerif-Bold] text-2xl tracking-minExtra">
                    Valor AQI US: {vAquiUs}
                </Text>
            </View>
        </View>
    );
};

export default AirQualityCard;
