import {
  WiThermometer,
  WiWindy,
  WiDaySunny,
  WiCloudy,
  WiRain,
} from "react-icons/wi";

export default function Weather({ weather, error }) {
  const getWeatherIcon = (weatherCode) => {
    if (weatherCode === 0)
      return <WiDaySunny size={150} className="text-yellow-500" />;
    if (weatherCode === 1 || weatherCode === 2)
      return <WiCloudy size={150} className="text-gray-500" />;
    if (weatherCode >= 3)
      return <WiRain size={150} className="text-blue-500" />;
    return <WiDaySunny size={150} className="text-yellow-500" />;
  };

  return (
    <>
      {weather ? (
        <div className="text-center">
          <div className="flex justify-center items-center">
            {getWeatherIcon(weather.weathercode)}
          </div>
          <p className="text-4xl font-bold mb-4 text-gray-600">
            {weather.temperature}°C
          </p>
          <div className="text-lg">
            <p className="flex items-center justify-center text-red-500 font-bold mb-4">
              <WiThermometer size={30} className="text-red-500" />
              Temperature
            </p>
            <p className="flex items-center justify-center gap-2 text-sky-600 font-bold">
              <WiWindy size={30} className="text-sky-600" />
              Wind Speed :{" "}
              <span className="font-semibold">{weather.windspeed} km/h</span>
            </p>
          </div>
          {/* <p className="text-gray-500 italic text-sm">
            Weather Code: {weather.weathercode}
          </p> */}
        </div>
      ) : (
        !error && <p className="text-center text-gray-400">Loading...</p>
      )}
    </>
  );
}
