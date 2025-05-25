//cspell:disable
import { useEffect, useState } from "react";

export const useAirQuality = (  city: string,  state: string, country: string,  shouldFetch: boolean) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAirQuality = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=08692d60-166a-41f3-afe7-cc4c4825e190`
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
