//cspell:disable
export const contaminantes = {
  'PM2.5': [
    { min: 0.0, max: 12.0, label: "Bueno", color: "green", color2: '#95d5b2', aqi: "0-50" },
    { min: 12.1, max: 35.4, label: "Moderado", color: "yellow", color2: '#fcefb4', aqi: "51-100" },
    { min: 35.5, max: 55.4, label: "Dañino para sensibles", color: "orange", color2: '#f9c784', aqi: "101-150" },
    { min: 55.5, max: 150.4, label: "Dañino", color: "red", color2: '#f4acb7', aqi: "151-200" },
    { min: 150.5, max: 250.4, label: "Muy dañino", color: "purple", color2: '#e5b3fe', aqi: "201-300" },
    { min: 250.5, max: 500.4, label: "Peligroso", color: "brown", color2: '#deab90', aqi: "301-500" },
  ],
  'PM10': [
    { min: 0, max: 54, label: "Bueno", color: "green", color2: '#95d5b2', aqi: "0-50" },
    { min: 55, max: 154, label: "Moderado", color: "yellow", color2: '#fcefb4', aqi: "51-100" },
    { min: 155, max: 254, label: "Dañino para sensibles", color: "orange", color2: '#f9c784', aqi: "101-150" },
    { min: 255, max: 354, label: "Dañino", color: "red", color2: '#f4acb7', aqi: "151-200" },
    { min: 355, max: 424, label: "Muy dañino", color: "purple", color2: '#e5b3fe', aqi: "201-300" },
    { min: 425, max: 604, label: "Peligroso", color: "brown", color2: '#deab90', aqi: "301-500" },
  ],
  'SO2': [
    { min: 0, max: 35, label: "Bueno", color: "green", color2: '#95d5b2', aqi: "0-50" },
    { min: 36, max: 75, label: "Moderado", color: "yellow", color2: '#fcefb4', aqi: "51-100" },
    { min: 76, max: 185, label: "Dañino para sensibles", color: "orange", color2: '#f9c784', aqi: "101-150" },
    { min: 186, max: 304, label: "Dañino", color: "red", color2: '#f4acb7', aqi: "151-200" },
    { min: 305, max: 604, label: "Muy dañino", color: "purple", color2: '#e5b3fe', aqi: "201-300" },
    { min: 605, max: 1004, label: "Peligroso", color: "brown", color2: '#deab90', aqi: "301-500" },
  ],
  'NO2': [
    { min: 0, max: 53, label: "Bueno", color: "green", color2: '#95d5b2', aqi: "0-50" },
    { min: 54, max: 100, label: "Moderado", color: "yellow", color2: '#fcefb4', aqi: "51-100" },
    { min: 101, max: 360, label: "Dañino para sensibles", color: "orange", color2: '#f9c784', aqi: "101-150" },
    { min: 361, max: 649, label: "Dañino", color: "red", color2: '#f4acb7', aqi: "151-200" },
    { min: 650, max: 1249, label: "Muy dañino", color: "purple", color2: '#e5b3fe', aqi: "201-300" },
    { min: 1250, max: 2049, label: "Peligroso", color: "brown", color2: '#deab90', aqi: "301-500" },
  ],
  'O3': [
    { min: 0, max: 54, label: "Bueno", color: "green", color2: '#95d5b2', aqi: "0-50" },
    { min: 55, max: 70, label: "Moderado", color: "yellow", color2: '#fcefb4', aqi: "51-100" },
    { min: 71, max: 85, label: "Dañino para sensibles", color: "orange", color2: '#f9c784', aqi: "101-150" },
    { min: 86, max: 105, label: "Dañino", color: "red", color2: '#f4acb7', aqi: "151-200" },
    { min: 106, max: 200, label: "Muy dañino", color: "purple", color2: '#e5b3fe', aqi: "201-300" },
    { min: 201, max: 404, label: "Peligroso", color: "brown", color2: '#deab90', aqi: "301-500" },
  ],
  'CO': [
    { min: 0.0, max: 4.4, label: "Bueno", color: "green", color2: '#95d5b2', aqi: "0-50" },
    { min: 4.5, max: 9.4, label: "Moderado", color: "yellow", color2: '#fcefb4', aqi: "51-100" },
    { min: 9.5, max: 12.4, label: "Dañino para sensibles", color: "orange", color2: '#f9c784', aqi: "101-150" },
    { min: 12.5, max: 15.4, label: "Dañino", color: "red", color2: '#f4acb7', aqi: "151-200" },
    { min: 15.5, max: 30.4, label: "Muy dañino", color: "purple", color2: '#e5b3fe', aqi: "201-300" },
    { min: 30.5, max: 50.4, label: "Peligroso", color: "brown", color2: '#deab90', aqi: "301-500" },
  ],
};

export function interpretarContaminante(tipo: string, valor: number) {
  const rangos = contaminantes[tipo];
  if (!rangos) return { label: "Tipo no válido", color: "gray", aqi: "N/A" };

  for (const rango of rangos) {
    if (valor >= rango.min && valor <= rango.max) {
      return rango;
    }
  }

  return { label: "Valor fuera de rango", color: "gray", aqi: "N/A" };
}
