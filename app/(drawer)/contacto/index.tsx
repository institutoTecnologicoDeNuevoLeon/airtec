//cspell:disable 
import { View, Text, TouchableOpacity, Linking, Alert, ScrollView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const Contacto = () => {
  const openEmail = async () => {
    const email = 'l20481161@nuevoleon.tecnm.mx';
    const cc = 'norma.vh@nuevoleon.tecnm.mx';
    const subject = 'Duda con la aplicación AirTec';
    const url = `mailto:${email}?cc=${cc}&subject=${encodeURIComponent(subject)}`;

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'No se pudo abrir el cliente de correo. Asegúrate de tener una app configurada como Gmail.');
    }
  };

  const openMaps = async () => {
    const address = 'Av Eloy Cavazos 2001, Tolteca, 67170 Guadalupe, N.L.';

    // geo: para Android, fallback a Google Maps web
    const geoUrl = Platform.OS === 'android'
      ? `geo:0,0?q=${encodeURIComponent(address)}`
      : `http://maps.apple.com/?q=${encodeURIComponent(address)}`;

    const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    const supported = await Linking.canOpenURL(geoUrl);
    if (supported) {
      await Linking.openURL(geoUrl);
    } else {
      const fallbackSupported = await Linking.canOpenURL(fallbackUrl);
      if (fallbackSupported) {
        await Linking.openURL(fallbackUrl);
      } else {
        Alert.alert('Error', 'No se pudo abrir la ubicación. Asegúrate de tener una app como Google Maps instalada.');
      }
    }
  };

  return (
    <ScrollView className="flex-1 bg-fondo4 px-6 py-10">
      <Text className="text-3xl font-bold text-center mb-8">Contáctanos</Text>

      <View className="space-y-6 p-3" style={{ backgroundColor: '#8e9aaf', opacity: 0.7, borderRadius: 20 }}>
        {/* Nombre */}
        <View className="flex-row items-center pb-5">
          <Ionicons name="person-outline" size={24} color="#444" className="mr-4 mt-4" />
          <Text className="text-lg text-black mt-4">
            {'\u2022'} Emilio Rivera López {'\n'}
            {'\u2022'} Norma Vizcaíno Hernández
          </Text>
        </View>

        {/* Correo */}
        <TouchableOpacity onPress={openEmail} className="flex-row items-center pb-5">
          <Ionicons name="mail-outline" size={24} color="#444" className="mr-4" />
          <Text className="text-lg text-black">
            {'\u2022'} l20481161@nuevoleon.tecnm.mx {'\n'}
            {'\u2022'} norma.vh@nuevoleon.tecnm.mx
          </Text>
          <Ionicons name="arrow-undo-outline" size={24} color="#274c77" className="mr-4 ml-2" />
        </TouchableOpacity>

        {/* Teléfono */}
        <TouchableOpacity className="flex-row items-center pb-5">
          <Ionicons name="call-outline" size={24} color="#444" className="mr-4" />
          <Text className="text-lg text-black">{'\u2022'} (81) 8157-0500</Text>
        </TouchableOpacity>

        {/* Dirección */}
        <TouchableOpacity onPress={openMaps} className="flex-row items-center pb-5">
          <Ionicons name="location-outline" size={24} color="#444" className="mr-4" />
          <Text className="text-lg text-black">
            {'\u2022'} Av Eloy Cavazos 2001, Tolteca,{'\n'} 67170 Guadalupe, N.L.
          </Text>
          <Ionicons name="arrow-undo-outline" size={24} color="#274c77" className="mt-5 pl-8" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Contacto;
