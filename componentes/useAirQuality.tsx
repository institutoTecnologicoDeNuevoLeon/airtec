//cspell:disable
import React, { useEffect, useState } from "react";

export const useAirQuality = (
  city: string,
  state: string,
  country: string,
  shouldFetch: boolean
) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAirQuality = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=f89a2676-ac48-455b-bcf0-c75157a9a630`
        );
        const json = await response.json();
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.log("Error al obtener datos", error);
      } finally {
        setLoading(false);
      }
    };

    if (shouldFetch) {
      fetchAirQuality();
    }
  }, [shouldFetch, city, state, country]);

  return { data, loading };
};
