//cspell:disable 
import React, { useState, useEffect } from "react";
import { View, Text, Modal, FlatList, Pressable, ActivityIndicator,
} from "react-native";
import { countries } from "../../../../aqiTool/countries";
import { ScrollView } from "react-native-gesture-handler";

export default function CountrySelector() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);

  const API_KEY = "f89a2676-ac48-455b-bcf0-c75157a9a630";

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
    setSelectedState("");
    setModalVisible(false);
  };

  const fetchStates = async () => {
    if (!selectedCountry) return;
    setLoadingStates(true);
    try {
      const response = await fetch(
        `https://api.airvisual.com/v2/states?country=${encodeURIComponent(
          selectedCountry
        )}&key=${API_KEY}`
      );
      const data = await response.json();
      if (data.status === "success") {
        setStates(data.data);
      } else {
        setStates([]);
        console.warn("No se encontraron estados:", data.message);
      }
    } catch (error) {
      console.error("Error al obtener estados:", error);
    } finally {
      setLoadingStates(false);
    }
  };

  useEffect(() => {
    fetchStates();
  }, [selectedCountry]);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-lg mb-4 font-[PTSerif-Bold]">
        País seleccionado:{" "}
        <Text className="font-[PTSerif-Regular]">
          {selectedCountry || "Ninguno"}
        </Text>
      </Text>

      <Pressable
        className="bg-blue-500 px-4 py-2 rounded mb-4"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-white text-center">Seleccionar país</Text>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <View className="flex-1 bg-white pt-12">
          <Text className="text-xl font-bold text-center mb-4">
            Selecciona un país
          </Text>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.country}
            renderItem={({ item }) => (
              <Pressable
                className="px-4 py-3 border-b border-gray-200"
                onPress={() => handleSelectCountry(item.country)}
              >
                <Text className="text-base">{item.country}</Text>
              </Pressable>
            )}
          />
          <Pressable
            className="bg-red-500 m-4 p-3 rounded"
            onPress={() => setModalVisible(false)}
          >
            <Text className="text-white text-center">Cerrar</Text>
          </Pressable>
        </View>
      </Modal>

      {selectedCountry ? (
        <>
          <Text className="text-lg font-semibold mb-2">Estados disponibles:</Text>
          {loadingStates ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList className="mb-10"
              data={states}
              keyExtractor={(item) => item.state}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => setSelectedState(item.state)}
                  className="py-2 border-b border-gray-300"
                >
                  <Text className="text-base">{item.state}</Text>
                </Pressable>
              )}
            />
          )}
        </>
      ) : null}
    </ScrollView>
  );
}
