import { useState, useEffect } from "react";
import Location from "./components/Location/Location";
import Error from "./components/Error/Error";
import Refresh from "./components/Refresh/Refresh";
import Social from "./components/Social/Social";
import Weather from "./components/Weather/Weather";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
          fetchLocationData(latitude, longitude);
        },
        () => {
          setError("Failed to get location. Please allow location access.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data = await response.json();
      setWeather(data.current_weather);
    } catch {
      setError("Failed to fetch weather data.");
    }
  };

  const fetchLocationData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      const locationInfo = data.address;
      setLocation(
        `${locationInfo.city || locationInfo.town || locationInfo.village}, ${
          locationInfo.country
        }`
      );
    } catch {
      setError("Failed to fetch location data.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-500 text-white flex flex-col items-center justify-center px-4">
      <div className="header">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">
          Weather App
        </h1>
      </div>
      <div className="w-full max-w-md bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-2xl p-8">
        <Error error={error} />

        <Location location={location} />

        <Weather weather={weather} error={error} />

        <Refresh
          setWeather={setWeather}
          setLocation={setLocation}
          setError={setError}
          fetchWeatherData={fetchWeatherData}
          fetchLocationData={fetchLocationData}
        />

        <Social />
      </div>
    </div>
  );
};

export default App;
