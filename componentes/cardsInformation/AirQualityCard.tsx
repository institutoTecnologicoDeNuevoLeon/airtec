//cspell:disable
// componentes/AirQualityCard.tsx
import { View, Text, Image } from "react-native";
import React from "react";

const AirQualityCard = ({ bgColour, iconos, iconAquiUS, sAquiUs, vAquiUs }) => {
    return (
        <View
            className="flex-row items-center w-[90%] rounded-3xl mt-3 shadow-md shadow-black"
            style={{ backgroundColor: bgColour }}
        >
            <Image
                source={iconos[iconAquiUS]}
                style={{ width: 80, height: 80, marginTop: 10, marginBottom: 10,}} // ajusta los valores a tu gusto
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
