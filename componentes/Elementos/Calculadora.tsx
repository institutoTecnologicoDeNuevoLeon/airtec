//cspell:disable
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { interpretarContaminante } from "../../aqiTool/elementosAqi";
import ContaminanteCard from "./ContaminanteCard";
import { ScrollView } from "react-native-gesture-handler";

const Calculadora = () => {

    return (
        // contenedor principal

        <ScrollView>
            <ContaminanteCard tipo="PM2.5" placeholder="Ingresa el valor PM2.5" />
            <ContaminanteCard tipo="PM10" placeholder="Ingresa el valor PM10" />
            <ContaminanteCard tipo="SO2" placeholder="Ingresa el valor SO2" />
            <ContaminanteCard tipo="NO2" placeholder="Ingresa el valor NO2" />
            <ContaminanteCard tipo="O3" placeholder="Ingresa el valor O3" />
            <ContaminanteCard tipo="CO" placeholder="Ingresa el valor CO" />
            {/* Puedes repetir con otros contaminantes */}
            <View className="w-full h-20"></View>
        </ScrollView>
    );
};

export default Calculadora;
