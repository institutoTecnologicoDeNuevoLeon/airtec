//cspell:disable 
import { View, Text, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

const consulta = () => {

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const [data, setData] = useState<any>(null); //Aqui me falto agregarle el null
  const [loading, setLoading] = useState(false);

  const fetchAirQuality = async () => {
    setLoading(true); //tratar de cambiar el https, con una variable global, porque esto no cambiara
    try {
      const response = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=f89a2676-ac48-455b-bcf0-c75157a9a630`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.log('Error al obtener datos', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View>
        <Text>Cargando datos.....</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const getWeatherIcon = (iconCode: string) => {
    if (iconCode === '01n') {
      return <Icon name="cloud" size={30} color="black" />;
    }
    if (iconCode === '01d') {
      return <Icon name="cloud" size={30} color="black" />;
    }
  }



  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Revisa la ciudad a revisar</Text>

      <Text>Ciudad:</Text>
      <TextInput
        value={city}
        onChangeText={setCity}
        placeholder='Ingresa la ciudad'
      />

      <Text>Estado</Text>
      <TextInput
        value={state}
        onChangeText={setState}
        placeholder='Ingresa el estado'
      />
      <Text>Pais</Text>
      <TextInput
        value={country}
        onChangeText={setCountry}
        placeholder='Ingresa el país'
      />

      <Button title='Consultar' onPress={fetchAirQuality} />

      {data && (
        <View>

          <View>
            {getWeatherIcon(data.current.weather.ic)}
          </View>

          <Text>Ciudad: {data.city}</Text>
          <Text>Estado: {data.state}</Text>
          <Text>País: {data.country}</Text>
          <Text>Calidad del aire (AQI US): {data.current.pollution.aqius}</Text>
          <Text>Temperatura: {data.current.weather.tp}°C</Text>
          <Text>Humedad: {data.current.weather.hu}%</Text>
          <Text>Presión: {data.current.weather.pr} hPa</Text>


        </View>
      )}
    </View>
  )
}

export default consulta
