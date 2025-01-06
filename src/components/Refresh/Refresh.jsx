import { FaRedo } from "react-icons/fa";

export default function Refresh({
  setWeather,
  setLocation,
  setError,
  fetchWeatherData,
  fetchLocationData,
}) {
  const handleRefresh = () => {
    setWeather(null);
    setLocation("");
    setError("");
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
  };
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleRefresh}
        className="bg-sky-600 hover:bg-sky-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
      >
        <FaRedo size={20} />
        Refresh
      </button>
    </div>
  );
}
