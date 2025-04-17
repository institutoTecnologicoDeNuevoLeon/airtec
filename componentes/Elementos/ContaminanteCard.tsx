//cspell:disable 
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { interpretarContaminante } from "../../aqiTool/elementosAqi";

interface Props {
    tipo: string;
    placeholder: string;
}

const ContaminanteCard = ({ tipo, placeholder }: Props) => {
    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState<any>(null);

    const calcular = () => {
        const num = parseFloat(valor);
        if (!isNaN(num)) {
            const interpretacion = interpretarContaminante(tipo, num);
            setResultado(interpretacion);
        }
    };


    let uMedida = '';
    if (tipo === 'PM2.5' || tipo === 'PM10') {
        uMedida = '(µg/m³)'
    }
    if (tipo === 'SO2' || tipo === 'NO2' || tipo === 'O3' || tipo === 'CO') {
        uMedida = '(ppm)'
    }

    if(tipo === 'SO2'){
        tipo = 'SO₂'
    }

    if (tipo === 'NO2') {
        tipo = 'NO₂'
    }

    if (tipo === 'O3') {
        tipo = 'O₃'
    }

    return (
        <View className="max-w-96 mt-5">
            <View className="items-center mr-2 bg-fondo4 rounded-2xl shadow-black" style={{ elevation: 10 }}>
                <View className="my-3">
                    <Text className="text-lg font-[PTSerif-Bold]">{tipo} {uMedida}</Text>
                </View>
                <View className="flex-row">
                    <View className="w-1/2 h-20 items-center justify-center bg-fondo4 border-fondo3">
                        <TextInput
                            className="w-full px-2 py-1 rounded-md text-center font-[PTSerif-Italic]"
                            placeholder={placeholder}
                            keyboardType="numeric"
                            value={valor}
                            onChangeText={setValor}
                            placeholderTextColor={"#495057"}
                        />
                    </View>
                    <View className="w-1/2 h-20 items-center justify-center bg-fondo4 border-l-2 border-fondo3">
                        {resultado && (
                            <>
                                <Text>{resultado.label}</Text>
                                <Text>AQI: {resultado.aqi}</Text>
                            </>
                        )}
                    </View>
                </View>

                <View className="flex-row">
                    <View className="w-1/2 items-center">
                        <Pressable className="py-5" onPress={calcular}>
                            <View className="w-24 h-16 items-center justify-center rounded-full bg-fondo6">
                                <Ionicons size={30} name="calculator-outline" color="white" />
                            </View>
                        </Pressable>
                    </View>
                    <View className="w-1/2 items-center">
                        <Pressable className="py-5">
                            <View className="w-24 h-16 items-center justify-center rounded-full bg-fondo6">
                                <Ionicons size={30} name="shield-checkmark-outline" color="white" />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ContaminanteCard;
