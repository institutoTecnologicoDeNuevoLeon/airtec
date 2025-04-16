//cspell:disable 
import { Image, View, Text, ActivityIndicator, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native';

const Consulta = () => {

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchAirQuality = async () => {
    if (!country.trim() || !state.trim() || !city.trim()) {
      Alert.alert(
        'Campos incompletos', 'Favor de consultar las tablas de ciudades',
        [{ text: 'OK' }]
      );
      return;
    }

    setLoading(true);
    setData(null);

    try {
      const response = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=f89a2676-ac48-455b-bcf0-c75157a9a630`);
      const json = await response.json();

      if (json.status === 'success') {
        setData(json.data);
      } else {
        Alert.alert(
          'Sin resultados',
          'Verificar ortografía por favor',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.log('Error al obtener datos', error);
      Alert.alert(
        'Error de conexión',
        'Ocurrió un problema al conectar con el servidor. Intenta nuevamente.',
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (iconCode: string) => {
    if (iconCode === '01n') {
      return <Image source={require('../../../../assets/images/iconosClima/luna-llena.png')} style={{ width: 40, height: 40 }} />;
    }
    if (iconCode === '01d') {
      return <Image source={require('../../../../assets/images/iconosClima/sol.png')} style={{ width: 40, height: 40 }} />;
    }
    return null;
  };

  // 🔧 Aquí comienza el return principal del componente
  if (loading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text>Obteniendo información</Text>
        <LottieView
          source={require('../../../../assets/iconos-Animados/Animation - 1744182723823.json')}
          autoPlay
          loop
          resizeMode='cover'
          style={{ width: 40, height: 40 }}
        />
      </View>
    );
  }

  return (
    <View className='items-center mt-10'>
      <Text className='text-3xl font-[PTSerif-Bold]'>Ingresa la ciudad a revisar</Text>

      <View className='flex-2 justify-center mt-16 px-16 py-3 border-2 border-fondo3 bg-fondo4 rounded-lg'>

        <Text className='font-[PTSerif-Bold] tracking-extra text-xl'>País</Text>
        <TextInput
          value={country}
          onChangeText={setCountry}
          placeholder='Ingresa el país'
        />

        <Text className='font-[PTSerif-Bold] tracking-extra text-xl'>Estado</Text>
        <TextInput
          value={state}
          onChangeText={setState}
          placeholder='Ingresa el estado'
        />

        <Text className='font-[PTSerif-Bold] tracking-extra text-xl'>Ciudad:</Text>
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder='Ingresa la ciudad'
        />

        <Pressable onPress={fetchAirQuality} className='bg-boton rounded-tl-3xl rounded-br-3xl
                    p-3 border-b-2 border-l-2 border-black'>
          <Text className='font-[PTSerif-Bold] text-xl text-boton2 tracking-maxExtra'>Consultar</Text>
        </Pressable>

        {data && (
          <View className='mt-5 mb-5 rounded-lg bg-slate-300 p-3 border-2 border-fondo3'>
            <View className='items-center'>
              {getWeatherIcon(data.current.weather.ic)}
            </View>

            <Text className='font-[PTSerif-Bold] mt-2'>Ciudad: <Text className='font-[PTSerif-Italic]'>{data.city}</Text></Text>
            <Text className='font-[PTSerif-Bold] mt-2'>Estado: <Text className='font-[PTSerif-Italic]'>{data.state}</Text></Text>
            <Text className='font-[PTSerif-Bold] mt-2'>País: <Text className='font-[PTSerif-Italic]'>{data.country}</Text></Text>
            <Text className='font-[PTSerif-Bold] mt-2'>Calidad del aire (AQI US): <Text className='font-[PTSerif-Italic]'>{data.current.pollution.aqius}</Text></Text>
            <Text className='font-[PTSerif-Bold] mt-2'>Temperatura: <Text className='font-[PTSerif-Italic]'>{data.current.weather.tp}°C</Text></Text>
            <Text className='font-[PTSerif-Bold] mt-2'>Humedad: <Text className='font-[PTSerif-Italic]'>{data.current.weather.hu}%</Text></Text>
            <Text className='font-[PTSerif-Bold] mt-2'>Presión: <Text className='font-[PTSerif-Italic]'>{data.current.weather.pr} hPa</Text></Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Consulta;
