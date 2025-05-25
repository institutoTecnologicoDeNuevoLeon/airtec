//cspell:disable 
import { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { interpretarContaminante } from "../../aqiTool/elementosAqi";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";


const contaminantes = [
    { tipo: "PM2.5", unidad: "µg/m³" },
    { tipo: "PM10", unidad: "µg/m³" },
    { tipo: "SO2", unidad: "ppm" },
    { tipo: "NO2", unidad: "ppm" },
    { tipo: "O3", unidad: "ppm" },
    { tipo: "CO", unidad: "ppm" },
];

export default function CalculadoraUnificada() {
    const [valores, setValores] = useState<Record<string, string>>({});
    const [resultados, setResultados] = useState<Record<string, any>>({});

    const manejarCambio = (tipo: string, valor: string) => {
        setValores((prev) => ({ ...prev, [tipo]: valor }));
    };

    const calcularTodo = () => {
        const nuevosResultados: Record<string, any> = {};

        for (const { tipo } of contaminantes) {
            const valor = parseFloat(valores[tipo]);
            if (!isNaN(valor)) {
                const interpretacion = interpretarContaminante(tipo, valor);
                nuevosResultados[tipo] = interpretacion;
            }
        }

        setResultados(nuevosResultados);
    };

    return (
        <ScrollView>
            <View className="w-screen px-5 self-center mb-8">
            
            <Text className="text-3xl font-[PTSerif-Bold] text-center mb-4">
                AQI por Contaminante
            </Text>

            <Text className="text-md font-[PTSerif-Italic] text-center mb-4">
                ( La información aparecerá abajo...)
            </Text>

            {contaminantes.map(({ tipo, unidad }) => (
                <View key={tipo} className="mb-4">
                    <Text className="text-lg font-[PTSerif-Bold] mb-1">{tipo} ({unidad})</Text>
                    <TextInput
                        className="border border-gray-300 rounded px-3 py-2 bg-white font-[PTSerif-Italic]"
                        keyboardType="numeric"
                        placeholder={`Ingresa valor para ${tipo}`}
                        value={valores[tipo] || ""}
                        onChangeText={(texto) => manejarCambio(tipo, texto)}
                        placeholderTextColor={"#888"}
                    />
                </View>
            ))}

            <Pressable
                onPress={calcularTodo}
                className="bg-fondo6 py-4 rounded-xl mt-2 items-center"
            >
                <Ionicons name="calculator-outline" size={28} color="white" />
                <Text className="text-white mt-1 font-[PTSerif-Bold]">Calcular AQI</Text>
            </Pressable>

            {Object.keys(resultados).length > 0 && (
                <View className="mt-6 bg-white rounded-xl p-4 shadow-md">
                    <Text className="text-lg font-[PTSerif-Bold] mb-2">Resultados:</Text>
                    {Object.entries(resultados).map(([tipo, res]) => (
                        <View key={tipo} className="mb-2 border-b border-gray-200 pb-2">
                            <Text className="font-[PTSerif-Bold]">{tipo}</Text>
                            <Text>Clasificación: {res.label}</Text>
                            <Text>AQI: {res.aqi}</Text>
                        </View>
                    ))}
                </View>
            )}
            </View>
        </ScrollView>
    );
}
