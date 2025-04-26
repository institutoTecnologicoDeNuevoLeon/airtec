//cspell:disable 
import React, { useState, useEffect } from "react";
import { View, Text, Modal, FlatList, Pressable, ActivityIndicator, ImageBackground } from "react-native";
import { countries } from "../../../../aqiTool/countries";
import { ScrollView } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";


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

    <ImageBackground
      source={require('../../../../assets/images/fondos/fondo1.jpg')}
      className="flex-1 justify-center items-center">
      <View style={{ backgroundColor: 'rgba(255,255,255,0.90)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, }} />
      <ScrollView className="p-4" contentContainerStyle={{ alignContent: 'center', justifyContent: 'center' }}>



        <Text className="mb-4 font-[PTSerif-Bold] text-2xl">
          País seleccionado:{" "}
          <Text className="font-[PTSerif-Regular]">
            {selectedCountry || "Ninguno"}
          </Text>
        </Text>

        <Pressable
          className="px-5 py-3 rounded-3xl bg-fondo2 m-3 shadow-lg shadow-black
                      border-2 border-fondo7 elevation-2xl"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-center text-xl tracking-extra">Seleccionar país</Text>
        </Pressable>

        <View className="justify-center items-center">
          <LottieView
            source={require("../../../../assets/iconos-Animados/abajo.json")}
            autoPlay
            loop
            resizeMode="cover"
            style={{ width: 120, height: 120 }}
          />
        </View>

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
              className="px-5 py-3 rounded-3xl m-3 shadow-lg shadow-black
                      border-2 bg-red-400 elevation-2xl"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-black text-center text-xl tracking-maxExtra font-[PTSerif-Bold]">Cerrar</Text>
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
    </ImageBackground>

  );
}
