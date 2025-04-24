//cspell:disable 
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default function ManualCitySelector() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = "f89a2676-ac48-455b-bcf0-c75157a9a630";

  const fetchCities = async () => {
    if (!country || !state) {
      setErrorMsg("Por favor, ingresa tanto el país como el estado.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setCities([]);

    try {
      const response = await fetch(
        `https://api.airvisual.com/v2/cities?state=${encodeURIComponent(
          state
        )}&country=${encodeURIComponent(country)}&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.status === "success") {
        setCities(data.data);
      } else {
        setErrorMsg(
          "No se encontraron resultados. Revisa el país y el estado en las listas correspondientes."
        );
      }
    } catch (error) {
      console.error("Error al obtener ciudades:", error);
      setErrorMsg("Hubo un error al obtener las ciudades.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-semibold mb-2">País:</Text>
      <TextInput
        placeholder="Ejemplo: Mexico"
        value={country}
        onChangeText={setCountry}
        className="border border-gray-300 p-2 rounded mb-4"
      />

      <Text className="text-lg font-semibold mb-2">Estado:</Text>
      <TextInput
        placeholder="Ejemplo: Nuevo León"
        value={state}
        onChangeText={setState}
        className="border border-gray-300 p-2 rounded mb-4"
      />

      <Pressable
        onPress={fetchCities}
        className="bg-blue-500 p-3 rounded mb-4"
      >
        <Text className="text-white text-center">Buscar ciudades</Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {errorMsg ? (
        <Text className="text-red-600 text-center mb-4">{errorMsg}</Text>
      ) : null}

      <FlatList
        data={cities}
        keyExtractor={(item) => item.city}
        renderItem={({ item }) => (
          <Text className="text-base py-2 border-b border-gray-200">
            {item.city}
          </Text>
        )}
      />
    </View>
  );
}
