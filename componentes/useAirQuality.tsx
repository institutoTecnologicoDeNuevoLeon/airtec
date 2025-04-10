//cspell:disable
import React, { useEffect, useState } from "react";

export const useAirQuality = (city: String, state: string, country: string) => {
  const [data, setData] = useState<any>(null); // Aquí agregamos null como inicialización
  const [loading, setLoading] = useState(false);

  const fetchAirQuality = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=f89a2676-ac48-455b-bcf0-c75157a9a630`
      );
      const json = await response.json();
      console.log(json);
      setData(json.data); // Guardamos los datos en el estado
    } catch (error) {
      console.log("Error al obtener datos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAirQuality();
  }, []);

  return { data, loading };
};
